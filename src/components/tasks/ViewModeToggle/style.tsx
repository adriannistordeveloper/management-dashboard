import type { CSSProperties } from 'react'

import type { TasksViewMode } from '../../../types/task.types'

export const containerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '20px',
}

export const groupStyle: CSSProperties = {
  display: 'inline-flex',
  padding: '4px',
  gap: '4px',
  borderRadius: '999px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
}

export const buttonStyle: CSSProperties = {
  border: 'none',
  borderRadius: '999px',
  background: 'transparent',
  color: '#4c5a73',
  padding: '8px 14px',
  font: 'inherit',
  fontWeight: 700,
  cursor: 'pointer',
}

const activeStyles: Record<TasksViewMode, CSSProperties> = {
  list: {
    background: '#eaf0ff',
    color: '#3151a6',
  },
  board: {
    background: '#eaf0ff',
    color: '#3151a6',
  },
}

export const getButtonStyle = (
  buttonMode: TasksViewMode,
  currentMode: TasksViewMode,
): CSSProperties => ({
  ...buttonStyle,
  ...(buttonMode === currentMode ? activeStyles[buttonMode] : null),
})
