import type { CSSProperties } from 'react'

import type { TaskStatus } from '@/types/task.types'

export const containerStyle: CSSProperties = {
  position: 'relative',
}

export const triggerBaseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  minHeight: '28px',
  padding: '4px 10px',
  border: 'none',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 700,
  cursor: 'pointer',
}

export const chevronStyle: CSSProperties = {
  width: '12px',
  height: '12px',
  display: 'block',
}

export const menuStyle: CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  minWidth: '160px',
  padding: '6px',
  borderRadius: '14px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)',
  display: 'grid',
  gap: '4px',
  zIndex: 10,
}

export const menuItemStyle: CSSProperties = {
  border: 'none',
  borderRadius: '10px',
  background: '#ffffff',
  color: '#14213d',
  padding: '10px 12px',
  font: 'inherit',
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'left',
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

export const getTriggerStyle = (status: TaskStatus): CSSProperties => ({
  ...triggerBaseStyle,
  ...statusStyles[status],
})
