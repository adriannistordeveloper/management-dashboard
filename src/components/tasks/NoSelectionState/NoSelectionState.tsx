import { containerStyle, copyStyle, titleStyle } from './style'

export function NoSelectionState() {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>No task selected</p>
      <p style={copyStyle}>Choose a task from the list to inspect its current details.</p>
    </div>
  )
}
