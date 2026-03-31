import { containerStyle, copyStyle, titleStyle } from '@/components/TasksLoadingState/style'

export function TasksLoadingState() {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Loading tasks</p>
      <p style={copyStyle}>Preparing the initial dashboard data.</p>
    </div>
  )
}
