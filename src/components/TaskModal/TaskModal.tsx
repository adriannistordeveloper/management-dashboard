import { useRef } from 'react'

import { useModalFocusTrap } from '@/hooks/useModalFocusTrap'
import type { TaskModalProps } from '@/types/task-ui.types'
import {
  closeButtonStyle,
  headerStyle,
  modalStyle,
  overlayStyle,
  subtitleStyle,
  titleStyle,
} from '@/components/TaskModal/style'

export function TaskModal({ children, onClose, subtitle, title }: TaskModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useModalFocusTrap(modalRef, onClose)

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
