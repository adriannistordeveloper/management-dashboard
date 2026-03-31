import type { CSSProperties } from 'react'
import type { TaskStatus } from '@/types/task.types'

export const panelStyle: CSSProperties = {
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

export const headerActionsStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
}

export const titleStyle: CSSProperties = {
  margin: 0,
}

export const countStyle: CSSProperties = {
  minWidth: '36px',
  padding: '6px 10px',
  borderRadius: '999px',
  background: '#eaf0ff',
  color: '#3151a6',
  textAlign: 'center',
  fontWeight: 700,
}

export const deleteAllButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d92d20',
  borderRadius: '999px',
  background: '#ffffff',
  color: '#b42318',
  padding: '6px 12px',
  font: 'inherit',
  fontSize: '13px',
  fontWeight: 700,
  cursor: 'pointer',
}

export const toggleAllButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#c8d5eb',
  borderRadius: '999px',
  background: '#ffffff',
  color: '#344054',
  padding: '6px 12px',
  font: 'inherit',
  fontSize: '13px',
  fontWeight: 700,
  cursor: 'pointer',
}

export const boardGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
  gap: '16px',
}

export const columnStyle: CSSProperties = {
  display: 'grid',
  alignContent: 'start',
  gap: '14px',
  minWidth: 0,
}

export const columnHeaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  boxSizing: 'border-box',
  padding: '12px 14px',
  borderRadius: '16px',
  borderWidth: '1px',
  borderStyle: 'solid',
}

export const columnHeaderButtonStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  textAlign: 'left',
}

export const columnTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: '15px',
  color: '#1f2937',
}

export const columnHeaderMetaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

export const columnCountStyle: CSSProperties = {
  minWidth: '28px',
  padding: '4px 8px',
  borderRadius: '999px',
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#344054',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: 700,
}

export const collapseIconStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '999px',
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#344054',
  flexShrink: 0,
}

export const collapseIconSvgStyle: CSSProperties = {
  width: '14px',
  height: '14px',
  display: 'block',
}

const columnHeaderStyles: Record<TaskStatus, CSSProperties> = {
  todo: {
    background: '#fffaf0',
    borderColor: '#f4d7a1',
  },
  in_progress: {
    background: '#f5f9ff',
    borderColor: '#c7dbff',
  },
  done: {
    background: '#f3fcf6',
    borderColor: '#b7e4c7',
  },
}

export const getColumnHeaderStyle = (status: TaskStatus): CSSProperties => ({
  ...columnHeaderButtonStyle,
  ...columnHeaderStyle,
  ...columnHeaderStyles[status],
})
