import { formatTaskStatus } from '../../../lib/formatTaskStatus'
import { groupTasksByStatus } from '../../../lib/groupTasksByStatus'
import { useVisibleTasks } from '../../../hooks/useVisibleTasks'
import { useTasksStore } from '../../../store/useTasksStore'
import { EmptyResultsState } from '../EmptyResultsState/EmptyResultsState'
import { TaskCard } from '../TaskCard/TaskCard'
import {
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
  statusCountStyle,
  statusHeaderStyle,
  statusSectionStyle,
  statusTitleStyle,
  titleStyle,
} from './style'

interface TasksListProps {
  onDeleteAllTasks: () => void
}

export function TasksList({ onDeleteAllTasks }: TasksListProps) {
  const tasks = useTasksStore((state) => state.tasks)
  const visibleTasks = useVisibleTasks()
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)
  const selectTask = useTasksStore((state) => state.selectTask)
  const groupedTasks = groupTasksByStatus(visibleTasks)

  return (
    <section style={panelStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Tasks</h2>
        <div style={headerActionsStyle}>
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
          <p style={emptyCopyStyle}>Mock data will appear here once the repository returns data.</p>
        </div>
      ) : visibleTasks.length === 0 ? (
        <EmptyResultsState />
      ) : (
        <div style={listStyle}>
          {groupedTasks.map((group) => (
            <section key={group.status} style={getStatusSectionStyle(group.status)}>
              <div style={statusHeaderStyle}>
                <h3 style={statusTitleStyle}>{formatTaskStatus(group.status)}</h3>
                <span style={statusCountStyle}>{group.tasks.length}</span>
              </div>

              <div style={listStyle}>
                {group.tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    isSelected={task.id === selectedTaskId}
                    onSelect={selectTask}
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
