import type { CSSProperties } from 'react'

import type { TaskStatus } from '../../../types/task.types'

export const panelStyle: CSSProperties = {
  minHeight: '440px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
}

export const headerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  marginBottom: '20px',
}

export const headingStyle: CSSProperties = {
  margin: 0,
}

export const stackStyle: CSSProperties = {
  display: 'grid',
  gap: '24px',
}

export const eyebrowStyle: CSSProperties = {
  margin: '0 0 8px',
  fontSize: '12px',
  lineHeight: 1.2,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#5c6b84',
}

export const titleStyle: CSSProperties = {
  margin: 0,
}

export const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
  gap: '16px',
}

export const metaItemStyle: CSSProperties = {
  display: 'grid',
  gap: '8px',
}

export const labelStyle: CSSProperties = {
  fontSize: '13px',
  color: '#5c6b84',
}

export const descriptionBlockStyle: CSSProperties = {
  display: 'grid',
  gap: '8px',
}

export const descriptionStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
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
  width: 'fit-content',
  padding: '4px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'capitalize',
  ...statusStyles[status],
})
