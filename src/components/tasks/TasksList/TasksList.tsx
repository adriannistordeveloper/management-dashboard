import { useTasksStore } from '../../../store/useTasksStore'
import { TaskCard } from '../TaskCard/TaskCard'
import {
  countStyle,
  emptyContainerStyle,
  emptyCopyStyle,
  emptyTitleStyle,
  headerStyle,
  listStyle,
  panelStyle,
  titleStyle,
} from './style'

export function TasksList() {
  const tasks = useTasksStore((state) => state.tasks)
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)
  const selectTask = useTasksStore((state) => state.selectTask)

  return (
    <section style={panelStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Tasks</h2>
        <span style={countStyle}>{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <div style={emptyContainerStyle}>
          <p style={emptyTitleStyle}>No tasks available</p>
          <p style={emptyCopyStyle}>Mock data will appear here once the repository returns data.</p>
        </div>
      ) : (
        <div style={listStyle}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              isSelected={task.id === selectedTaskId}
              onSelect={selectTask}
              task={task}
            />
          ))}
        </div>
      )}
    </section>
  )
}
