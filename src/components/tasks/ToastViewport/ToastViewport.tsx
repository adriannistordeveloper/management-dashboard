import type { CSSProperties } from 'react'

import type { ToastViewportProps } from '../../../types/task-ui.types'
import {
  destructiveToastStyle,
  errorToastStyle,
  messageStyle,
  successToastStyle,
  titleStyle,
  viewportStyle,
} from './style'

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
