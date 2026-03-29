interface TasksErrorStateProps {
  message: string
  onRetry: () => Promise<void>
}

export function TasksErrorState({ message, onRetry }: TasksErrorStateProps) {
  return (
    <div className="panel-state">
      <p className="state-title">Something went wrong</p>
      <p className="state-copy">{message}</p>
      <button className="secondary-button" onClick={() => void onRetry()} type="button">
        Retry
      </button>
    </div>
  )
}
