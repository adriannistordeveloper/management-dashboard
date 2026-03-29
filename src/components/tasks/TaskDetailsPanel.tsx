import { useTasksStore } from '../../store/useTasksStore'
import { NoSelectionState } from './NoSelectionState'

export function TaskDetailsPanel() {
  const tasks = useTasksStore((state) => state.tasks)
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)

  const selectedTask = tasks.find((task) => task.id === selectedTaskId)

  if (!selectedTask) {
    return (
      <section className="dashboard-panel details-panel">
        <div className="panel-header">
          <h2>Details</h2>
        </div>
        <NoSelectionState />
      </section>
    )
  }

  return (
    <section className="dashboard-panel details-panel">
      <div className="panel-header">
        <h2>Details</h2>
      </div>

      <div className="details-stack">
        <div>
          <p className="eyebrow">Selected task</p>
          <h3 className="details-title">{selectedTask.title}</h3>
        </div>

        <div className="details-grid">
          <div>
            <span className="details-label">Status</span>
            <strong className={`status-badge status-${selectedTask.status}`}>
              {selectedTask.status}
            </strong>
          </div>
          <div>
            <span className="details-label">Owner</span>
            <strong>{selectedTask.owner}</strong>
          </div>
          <div>
            <span className="details-label">Due date</span>
            <strong>{selectedTask.dueDate}</strong>
          </div>
          <div>
            <span className="details-label">Created at</span>
            <strong>{selectedTask.createdAt}</strong>
          </div>
        </div>

        <div className="details-description">
          <span className="details-label">Description</span>
          <p>{selectedTask.description}</p>
        </div>
      </div>
    </section>
  )
}
