import type { HiddenSelectionStateProps } from '@/types/task-ui.types'
import { buttonStyle, containerStyle, copyStyle, titleStyle } from '@/components/HiddenSelectionState/style'

export function HiddenSelectionState({ onResetFilters }: HiddenSelectionStateProps) {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Selected task is hidden</p>
      <p style={copyStyle}>
        The current filters do not include the selected task. Reset the filters to view it again.
      </p>
      <button onClick={onResetFilters} style={buttonStyle} type="button">
        Reset filters
      </button>
    </div>
  )
}
