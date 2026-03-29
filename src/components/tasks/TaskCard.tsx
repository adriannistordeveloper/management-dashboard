import type { Task } from '../../types/task.types'

interface TaskCardProps {
  isSelected: boolean
  onSelect: (taskId: string) => void
  task: Task
}

export function TaskCard({ isSelected, onSelect, task }: TaskCardProps) {
  return (
    <button
      className={`task-card${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(task.id)}
      type="button"
    >
      <div className="task-card-top">
        <span className={`status-badge status-${task.status}`}>{task.status}</span>
        <span className="task-date">{task.dueDate}</span>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-card-meta">
        <span>{task.owner}</span>
      </div>
    </button>
  )
}
