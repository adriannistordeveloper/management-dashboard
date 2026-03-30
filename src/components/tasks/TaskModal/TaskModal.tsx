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
  return (
    <div onClick={onClose} style={overlayStyle}>
      <div onClick={(event) => event.stopPropagation()} style={modalStyle}>
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
