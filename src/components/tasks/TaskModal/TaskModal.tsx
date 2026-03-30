import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

import {
  closeButtonStyle,
  headerStyle,
  modalStyle,
  overlayStyle,
  subtitleStyle,
  titleStyle,
} from './style'

interface TaskModalProps {
  children: ReactNode
  onClose: () => void
  subtitle: string
  title: string
}

export function TaskModal({ children, onClose, subtitle, title }: TaskModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const modalElement = modalRef.current

    if (!modalElement) {
      return
    }

    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    const firstFocusableElement = focusableElements[0]
    const lastFocusableElement = focusableElements[focusableElements.length - 1]

    firstFocusableElement?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return
      }

      const activeElement = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (activeElement === firstFocusableElement || activeElement === modalElement) {
          event.preventDefault()
          lastFocusableElement?.focus()
        }

        return
      }

      if (activeElement === lastFocusableElement) {
        event.preventDefault()
        firstFocusableElement?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div onClick={onClose} style={overlayStyle}>
      <div onClick={(event) => event.stopPropagation()} ref={modalRef} style={modalStyle}>
        <div style={headerStyle}>
          <div>
            <h2 style={titleStyle}>{title}</h2>
            {subtitle ? <p style={subtitleStyle}>{subtitle}</p> : null}
          </div>
          <button aria-label="Close task modal" onClick={onClose} style={closeButtonStyle} type="button">
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
