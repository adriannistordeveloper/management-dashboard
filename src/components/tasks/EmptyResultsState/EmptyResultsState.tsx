import { containerStyle, copyStyle, titleStyle } from './style'

export function EmptyResultsState() {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>No matching tasks</p>
      <p style={copyStyle}>Try adjusting the search, filters or sorting criteria.</p>
    </div>
  )
}
