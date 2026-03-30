import { formatDate } from '../../lib/formatDate'
import type { TaskCardProps } from '../../types/task-ui.types'
import { StatusMenu } from '../StatusMenu/StatusMenu'
import {
  cardBaseStyle,
  cardSelectedStyle,
  dateStyle,
  descriptionStyle,
  metaStyle,
  sourceBadgeStyle,
  titleStyle,
  titleRowStyle,
  topRowStyle,
} from './style'

export function TaskCard({ isSelected, onSelect, onStatusChange, task }: TaskCardProps) {
  return (
    <button
      onClick={() => onSelect(task.id)}
      style={isSelected ? { ...cardBaseStyle, ...cardSelectedStyle } : cardBaseStyle}
      type="button"
    >
      <div style={topRowStyle}>
        <StatusMenu onChange={onStatusChange(task)} status={task.status} />
        <span style={dateStyle}>{formatDate(task.dueDate)}</span>
      </div>
      <div style={titleRowStyle}>
        <h3 style={titleStyle}>{task.title}</h3>
        {task.isMock ? <span style={sourceBadgeStyle}>Mock</span> : null}
      </div>
      <p style={descriptionStyle}>{task.description}</p>
      <div style={metaStyle}>
        <span>{task.owner}</span>
      </div>
    </button>
  )
}
