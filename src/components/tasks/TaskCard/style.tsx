import type { CSSProperties } from 'react'

import type { TaskStatus } from '../../../types/task.types'

export const cardBaseStyle: CSSProperties = {
  width: '100%',
  border: '1px solid #dce4ef',
  borderRadius: '16px',
  background: '#fcfdff',
  padding: '18px',
  textAlign: 'left',
  cursor: 'pointer',
}

export const cardSelectedStyle: CSSProperties = {
  borderColor: '#3151a6',
  background: '#f4f7ff',
}

export const topRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
}

export const titleStyle: CSSProperties = {
  margin: '14px 0 10px',
  fontSize: '18px',
}

export const descriptionStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
}

export const metaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '16px',
  fontWeight: 600,
}

export const dateStyle: CSSProperties = {
  fontSize: '13px',
  color: '#5c6b84',
}

const statusStyles: Record<TaskStatus, CSSProperties> = {
  todo: {
    background: '#fff3d8',
    color: '#9b5c00',
  },
  in_progress: {
    background: '#dce8ff',
    color: '#1c4ed8',
  },
  done: {
    background: '#dcfce8',
    color: '#166534',
  },
}

export const getStatusBadgeStyle = (status: TaskStatus): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '28px',
  padding: '4px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'capitalize',
  ...statusStyles[status],
})
