import { formatDate } from '../../../lib/formatDate'
import type { Task } from '../../../types/task.types'
import {
  actionsStyle,
  bodyTextStyle,
  contentStyle,
  dangerButtonStyle,
  secondaryButtonStyle,
  taskMetaStyle,
  taskPreviewStyle,
  taskTitleStyle,
} from './style'

interface DeleteTaskConfirmationProps {
  isDeleting: boolean
  onCancel: () => void
  onConfirm: () => Promise<void>
  task: Task
}

export function DeleteTaskConfirmation({
  isDeleting,
  onCancel,
  onConfirm,
  task,
}: DeleteTaskConfirmationProps) {
  return (
    <div style={contentStyle}>
      <p style={bodyTextStyle}>
        This action will permanently remove the task from the dashboard.
      </p>

      <div style={taskPreviewStyle}>
        <p style={taskTitleStyle}>{task.title}</p>
        <p style={taskMetaStyle}>
          Owner: {task.owner} · Due date: {formatDate(task.dueDate)}
        </p>
      </div>

      <div style={actionsStyle}>
        <button onClick={onCancel} style={secondaryButtonStyle} type="button">
          Cancel
        </button>
        <button onClick={() => void onConfirm()} style={dangerButtonStyle} type="button">
          {isDeleting ? 'Deleting...' : 'Delete task'}
        </button>
      </div>
    </div>
  )
}
