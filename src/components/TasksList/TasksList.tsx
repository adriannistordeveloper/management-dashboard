import { useState } from 'react'

import { formatTaskStatus } from '../../lib/formatTaskStatus'
import { groupTasksByStatus } from '../../lib/groupTasksByStatus'
import { useVisibleTasks } from '../../hooks/useVisibleTasks'
import type { TaskStatus } from '../../types/task.types'
import type { TasksListProps } from '../../types/task-ui.types'
import { useTasksStore } from '../../store/useTasksStore'
import { EmptyResultsState } from '../EmptyResultsState/EmptyResultsState'
import { TaskCard } from '../TaskCard/TaskCard'
import {
  collapseIconStyle,
  collapseIconSvgStyle,
  countStyle,
  deleteAllButtonStyle,
  emptyContainerStyle,
  emptyCopyStyle,
  emptyTitleStyle,
  getStatusSectionStyle,
  headerActionsStyle,
  headerStyle,
  listStyle,
  panelStyle,
  statusHeaderButtonStyle,
  statusHeaderMetaStyle,
  statusCountStyle,
  statusHeaderStyle,
  statusTitleStyle,
  titleStyle,
  toggleAllButtonStyle,
} from './style'

const initialCollapsedSections: Record<TaskStatus, boolean> = {
  todo: false,
  in_progress: false,
  done: true,
}

export function TasksList({ onDeleteAllTasks, onStatusChange }: TasksListProps) {
  const tasks = useTasksStore((state) => state.tasks)
  const visibleTasks = useVisibleTasks()
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)
  const selectTask = useTasksStore((state) => state.selectTask)
  const groupedTasks = groupTasksByStatus(visibleTasks)
  const [collapsedSections, setCollapsedSections] =
    useState<Record<TaskStatus, boolean>>(initialCollapsedSections)
  const allSectionsCollapsed =
    groupedTasks.length > 0 && groupedTasks.every((group) => collapsedSections[group.status])

  const toggleSection = (status: TaskStatus) => {
    setCollapsedSections((currentSections) => ({
      ...currentSections,
      [status]: !currentSections[status],
    }))
  }

  const toggleAllSections = () => {
    setCollapsedSections((currentSections) => {
      const shouldExpandAll = groupedTasks.every((group) => currentSections[group.status])

      return groupedTasks.reduce<Record<TaskStatus, boolean>>(
        (nextSections, group) => {
          nextSections[group.status] = !shouldExpandAll
          return nextSections
        },
        { ...currentSections },
      )
    })
  }

  return (
    <section style={panelStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Tasks</h2>
        <div style={headerActionsStyle}>
          {tasks.length > 0 ? (
            <button onClick={toggleAllSections} style={toggleAllButtonStyle} type="button">
              {allSectionsCollapsed ? 'Show all' : 'Collapse all'}
            </button>
          ) : null}
          {tasks.length > 0 ? (
            <button onClick={onDeleteAllTasks} style={deleteAllButtonStyle} type="button">
              Delete all
            </button>
          ) : null}
          <span style={countStyle}>{visibleTasks.length}</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div style={emptyContainerStyle}>
          <p style={emptyTitleStyle}>No tasks available</p>
          <p style={emptyCopyStyle}>
            Add a new task or reset local storage to restore the default mock data.
          </p>
        </div>
      ) : visibleTasks.length === 0 ? (
        <EmptyResultsState />
      ) : (
        <div style={listStyle}>
          {groupedTasks.map((group) => (
            <section key={group.status} style={getStatusSectionStyle(group.status)}>
              <div style={statusHeaderStyle}>
                <button
                  aria-label={`${
                    collapsedSections[group.status] ? 'Expand' : 'Collapse'
                  } ${formatTaskStatus(group.status)} tasks`}
                  onClick={() => toggleSection(group.status)}
                  style={statusHeaderButtonStyle}
                  type="button"
                >
                  <h3 style={statusTitleStyle}>{formatTaskStatus(group.status)}</h3>
                  <div style={statusHeaderMetaStyle}>
                    <span style={statusCountStyle}>{group.tasks.length}</span>
                    <span style={collapseIconStyle}>
                      <svg
                        aria-hidden="true"
                        style={collapseIconSvgStyle}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d={
                            collapsedSections[group.status]
                              ? 'M4 6.5L8 10L12 6.5'
                              : 'M4 9.5L8 6L12 9.5'
                          }
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>

              {!collapsedSections[group.status] ? (
                <div style={listStyle}>
                  {group.tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      isSelected={task.id === selectedTaskId}
                      onSelect={selectTask}
                      onStatusChange={onStatusChange}
                      task={task}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
