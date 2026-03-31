import type { ViewModeToggleProps } from '@/types/task-ui.types'
import { containerStyle, getButtonStyle, groupStyle } from '@/components/ViewModeToggle/style'

export function ViewModeToggle({ onChange, viewMode }: ViewModeToggleProps) {
  return (
    <div style={containerStyle}>
      <div aria-label="Task view mode" role="tablist" style={groupStyle}>
        <button
          aria-selected={viewMode === 'list'}
          onClick={() => onChange('list')}
          role="tab"
          style={getButtonStyle('list', viewMode)}
          type="button"
        >
          List
        </button>
        <button
          aria-selected={viewMode === 'board'}
          onClick={() => onChange('board')}
          role="tab"
          style={getButtonStyle('board', viewMode)}
          type="button"
        >
          Board
        </button>
      </div>
    </div>
  )
}
