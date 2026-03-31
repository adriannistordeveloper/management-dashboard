import { useState } from 'react'

import type { ToastMessage, ToastTone } from '@/types/task-ui.types'

export const useTaskToasts = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const pushToast = (toast: { title: string; message: string; tone: ToastTone }) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)

    setToasts((currentToasts) => [...currentToasts, { id, ...toast }])

    window.setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((currentToast) => currentToast.id !== id))
    }, 3200)
  }

  return {
    pushToast,
    toasts,
  }
}
