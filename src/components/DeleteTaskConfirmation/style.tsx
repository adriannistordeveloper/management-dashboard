import type { CSSProperties } from 'react'

export const contentStyle: CSSProperties = {
  display: 'grid',
  gap: '18px',
}

export const bodyTextStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
}

export const taskPreviewStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
}

export const taskTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: '18px',
  fontWeight: 700,
  color: '#14213d',
}

export const taskMetaStyle: CSSProperties = {
  margin: 0,
  color: '#5c6b84',
  fontSize: '14px',
}

export const actionsStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  flexWrap: 'wrap',
}

export const secondaryButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#c8d5eb',
  borderRadius: '12px',
  background: '#ffffff',
  color: '#14213d',
  padding: '10px 14px',
  font: 'inherit',
  fontWeight: 600,
  cursor: 'pointer',
}

export const dangerButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d92d20',
  borderRadius: '12px',
  background: '#d92d20',
  color: '#ffffff',
  padding: '10px 16px',
  font: 'inherit',
  fontWeight: 700,
  cursor: 'pointer',
}
