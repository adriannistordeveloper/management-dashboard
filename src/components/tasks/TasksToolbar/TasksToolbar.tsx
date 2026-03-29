import { eyebrowStyle, noteStyle, titleStyle, toolbarStyle } from './style'

export function TasksToolbar() {
  return (
    <header style={toolbarStyle}>
      <div>
        <p style={eyebrowStyle}>Task Management Dashboard</p>
        <h1 style={titleStyle}>Execution overview</h1>
      </div>
      <p style={noteStyle}>
        Track delivery work, monitor ownership, and review the current status of active tasks.
      </p>
    </header>
  )
}
