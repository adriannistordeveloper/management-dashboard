import type { CSSProperties } from 'react'

import {
  destructiveToastStyle,
  errorToastStyle,
  messageStyle,
  successToastStyle,
  titleStyle,
  viewportStyle,
} from './style'

export interface ToastMessage {
  id: number
  title: string
  message: string
  tone: 'success' | 'error' | 'destructive'
}

interface ToastViewportProps {
  toasts: ToastMessage[]
}

export function ToastViewport({ toasts }: ToastViewportProps) {
  return (
    <div aria-live="polite" aria-atomic="true" style={viewportStyle}>
      {toasts.map((toast) => {
        const toastStyle: CSSProperties =
          toast.tone === 'success'
            ? successToastStyle
            : toast.tone === 'destructive'
              ? destructiveToastStyle
              : errorToastStyle

        return (
          <div key={toast.id} role="status" style={toastStyle}>
            <p style={titleStyle}>{toast.title}</p>
            <p style={messageStyle}>{toast.message}</p>
          </div>
        )
      })}
    </div>
  )
}
