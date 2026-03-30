import type { CSSProperties } from 'react'
import type { TaskStatus } from '../../../types/task.types'

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

export const listStyle: CSSProperties = {
  display: 'grid',
  gap: '16px',
}

export const statusSectionStyle: CSSProperties = {
  display: 'grid',
  gap: '14px',
  padding: '16px',
  borderRadius: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
}

export const statusHeaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
}

export const statusHeaderButtonStyle: CSSProperties = {
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

export const statusHeaderMetaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

export const statusTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: '16px',
  color: '#1f2937',
}

export const statusCountStyle: CSSProperties = {
  minWidth: '28px',
  padding: '4px 8px',
  borderRadius: '999px',
  background: '#f1f5f9',
  color: '#475467',
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
  background: '#eef2f7',
  color: '#4c5a73',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: 1,
  flexShrink: 0,
}

export const collapseIconSvgStyle: CSSProperties = {
  width: '14px',
  height: '14px',
  display: 'block',
}

const statusSectionStyles: Record<TaskStatus, CSSProperties> = {
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

export const getStatusSectionStyle = (status: TaskStatus): CSSProperties => ({
  ...statusSectionStyle,
  ...statusSectionStyles[status],
})

export const emptyContainerStyle: CSSProperties = {
  display: 'grid',
  justifyItems: 'start',
  gap: '10px',
  padding: '8px 0',
}

export const emptyTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: '20px',
  fontWeight: 700,
}

export const emptyCopyStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
}
