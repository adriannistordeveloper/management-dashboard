import { formatTaskPriority } from '@/lib/formatTaskPriority'
import { useDismissibleMenu } from '@/hooks/useDismissibleMenu'
import type { TaskPriority } from '@/types/task.types'
import type { PriorityMenuProps } from '@/types/task-ui.types'
import {
  chevronStyle,
  containerStyle,
  getPriorityTriggerStyle,
  menuItemStyle,
  menuStyle,
} from '@/components/StatusMenu/style'

const priorityOptions: TaskPriority[] = ['low', 'medium', 'high']

export function PriorityMenu({ onChange, priority }: PriorityMenuProps) {
  const { containerRef, isOpen, setIsOpen } = useDismissibleMenu()

  return (
    <div ref={containerRef} style={containerStyle}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={(event) => {
          event.stopPropagation()
          setIsOpen((currentState) => !currentState)
        }}
        style={getPriorityTriggerStyle(priority)}
        type="button"
      >
        {formatTaskPriority(priority)}
        <svg aria-hidden="true" style={chevronStyle} viewBox="0 0 16 16">
          <path
            d={isOpen ? 'M4 10L8 6L12 10' : 'M4 6L8 10L12 6'}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      {isOpen ? (
        <div role="menu" style={menuStyle}>
          {priorityOptions.map((option) => (
            <button
              key={option}
              onClick={(event) => {
                event.stopPropagation()
                onChange(option)
                setIsOpen(false)
              }}
              role="menuitem"
              style={menuItemStyle}
              type="button"
            >
              {formatTaskPriority(option)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
