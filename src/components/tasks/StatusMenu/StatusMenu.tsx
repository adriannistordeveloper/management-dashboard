import { useEffect, useRef, useState } from 'react'

import { formatTaskStatus } from '../../../lib/formatTaskStatus'
import type { TaskStatus } from '../../../types/task.types'
import type { StatusMenuProps } from '../../../types/task-ui.types'
import { chevronStyle, containerStyle, getTriggerStyle, menuItemStyle, menuStyle } from './style'

const statusOptions: TaskStatus[] = ['todo', 'in_progress', 'done']

export function StatusMenu({ onChange, status }: StatusMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
