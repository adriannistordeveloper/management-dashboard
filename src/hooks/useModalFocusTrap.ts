import { useEffect } from 'react'
import type { RefObject } from 'react'

export const useModalFocusTrap = (
  modalRef: RefObject<HTMLDivElement | null>,
  onClose: () => void,
) => {
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
  }, [modalRef, onClose])
}
