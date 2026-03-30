import { actionsStyle, bodyTextStyle, contentStyle, dangerButtonStyle, secondaryButtonStyle } from './style'

interface DeleteAllConfirmationProps {
  count: number
  isDeleting: boolean
  onCancel: () => void
  onConfirm: () => Promise<void>
}

export function DeleteAllConfirmation({
  count,
  isDeleting,
  onCancel,
  onConfirm,
}: DeleteAllConfirmationProps) {
  return (
    <div style={contentStyle}>
      <p style={bodyTextStyle}>
        This will permanently remove all {count} tasks from the dashboard.
      </p>

      <div style={actionsStyle}>
        <button onClick={onCancel} style={secondaryButtonStyle} type="button">
          Cancel
        </button>
        <button onClick={() => void onConfirm()} style={dangerButtonStyle} type="button">
          {isDeleting ? 'Deleting...' : 'Delete all'}
        </button>
      </div>
    </div>
  )
}
