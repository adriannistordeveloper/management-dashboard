import { buttonStyle, containerStyle, copyStyle, titleStyle } from './style'

interface TasksErrorStateProps {
  message: string
  onRetry: () => Promise<void>
}

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
