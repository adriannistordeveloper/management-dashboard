import type { TasksErrorStateProps } from '../../types/task-ui.types'
import { buttonStyle, containerStyle, copyStyle, titleStyle } from './style'

export function TasksErrorState({ message, onRetry }: TasksErrorStateProps) {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Something went wrong</p>
      <p style={copyStyle}>{message}</p>
      <button onClick={() => void onRetry()} style={buttonStyle} type="button">
        Retry
      </button>
    </div>
  )
}
