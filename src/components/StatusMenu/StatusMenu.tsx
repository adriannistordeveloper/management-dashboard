import { formatTaskStatus } from '@/lib/formatTaskStatus'
import { useDismissibleMenu } from '@/hooks/useDismissibleMenu'
import type { TaskStatus } from '@/types/task.types'
import type { StatusMenuProps } from '@/types/task-ui.types'
import { chevronStyle, containerStyle, getTriggerStyle, menuItemStyle, menuStyle } from '@/components/StatusMenu/style'

const statusOptions: TaskStatus[] = ['todo', 'in_progress', 'done']

export function StatusMenu({ onChange, status }: StatusMenuProps) {
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
        style={getTriggerStyle(status)}
        type="button"
      >
        {formatTaskStatus(status)}
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
          {statusOptions.map((option) => (
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
              {formatTaskStatus(option)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
