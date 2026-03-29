import type { Task } from '../../../types/task.types'
import {
  cardBaseStyle,
  cardSelectedStyle,
  dateStyle,
  descriptionStyle,
  getStatusBadgeStyle,
  metaStyle,
  titleStyle,
  topRowStyle,
} from './style'

interface TaskCardProps {
  isSelected: boolean
  onSelect: (taskId: string) => void
  task: Task
}

export function TaskCard({ isSelected, onSelect, task }: TaskCardProps) {
  return (
    <button
      onClick={() => onSelect(task.id)}
      style={isSelected ? { ...cardBaseStyle, ...cardSelectedStyle } : cardBaseStyle}
      type="button"
    >
      <div style={topRowStyle}>
        <span style={getStatusBadgeStyle(task.status)}>{task.status}</span>
        <span style={dateStyle}>{task.dueDate}</span>
      </div>
      <h3 style={titleStyle}>{task.title}</h3>
      <p style={descriptionStyle}>{task.description}</p>
      <div style={metaStyle}>
        <span>{task.owner}</span>
      </div>
    </button>
  )
}
