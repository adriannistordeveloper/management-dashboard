import { useTasksStore } from '../../store/useTasksStore'
import { TaskCard } from './TaskCard'

export function TasksList() {
  const tasks = useTasksStore((state) => state.tasks)
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)
  const selectTask = useTasksStore((state) => state.selectTask)

  return (
    <section className="dashboard-panel">
      <div className="panel-header">
        <h2>Tasks</h2>
        <span className="panel-count">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <div className="panel-state compact">
          <p className="state-title">No tasks available</p>
          <p className="state-copy">Mock data will appear here once the repository returns data.</p>
        </div>
      ) : (
        <div className="tasks-list">
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
