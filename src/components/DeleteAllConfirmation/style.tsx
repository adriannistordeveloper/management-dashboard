import type { CSSProperties } from 'react'

export const contentStyle: CSSProperties = {
  display: 'grid',
  gap: '18px',
}

export const bodyTextStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
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
