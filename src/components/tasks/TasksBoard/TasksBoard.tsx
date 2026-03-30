import { formatTaskStatus } from '../../../lib/formatTaskStatus'
import { groupTasksByStatus } from '../../../lib/groupTasksByStatus'
import { useVisibleTasks } from '../../../hooks/useVisibleTasks'
import { useTasksStore } from '../../../store/useTasksStore'
import type { Task, TaskStatus } from '../../../types/task.types'
import { EmptyResultsState } from '../EmptyResultsState/EmptyResultsState'
import { TaskCard } from '../TaskCard/TaskCard'
import {
  boardGridStyle,
  columnCountStyle,
  columnStyle,
  countStyle,
  deleteAllButtonStyle,
  getColumnHeaderStyle,
  headerActionsStyle,
  headerStyle,
  panelStyle,
  titleStyle,
  columnTitleStyle,
} from './style'

interface TasksBoardProps {
  onDeleteAllTasks: () => void
  onStatusChange: (task: Task) => (status: TaskStatus) => void
}

export function TasksBoard({ onDeleteAllTasks, onStatusChange }: TasksBoardProps) {
  const tasks = useTasksStore((state) => state.tasks)
  const visibleTasks = useVisibleTasks()
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)
  const selectTask = useTasksStore((state) => state.selectTask)
  const groupedTasks = groupTasksByStatus(visibleTasks)

  return (
    <section style={panelStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Board</h2>
        <div style={headerActionsStyle}>
          {tasks.length > 0 ? (
            <button onClick={onDeleteAllTasks} style={deleteAllButtonStyle} type="button">
              Delete all
            </button>
          ) : null}
          <span style={countStyle}>{visibleTasks.length}</span>
        </div>
      </div>

      {visibleTasks.length === 0 ? (
        <EmptyResultsState />
      ) : (
        <div style={boardGridStyle}>
          {groupedTasks.map((group) => (
            <section key={group.status} style={columnStyle}>
              <div style={getColumnHeaderStyle(group.status)}>
                <h3 style={columnTitleStyle}>{formatTaskStatus(group.status)}</h3>
                <span style={columnCountStyle}>{group.tasks.length}</span>
              </div>

              <div style={columnStyle}>
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
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
