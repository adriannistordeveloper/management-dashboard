import type { TasksViewMode } from '../../../types/task.types'
import { containerStyle, getButtonStyle, groupStyle } from './style'

interface ViewModeToggleProps {
  onChange: (mode: TasksViewMode) => void
  viewMode: TasksViewMode
}

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
