import type { CSSProperties } from 'react'

export const formStyle: CSSProperties = {
  display: 'grid',
  gap: '16px',
}

export const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
  gap: '14px',
}

export const fieldStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
}

export const labelStyle: CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#4c5a73',
}

export const inputStyle: CSSProperties = {
  width: '100%',
  minHeight: '42px',
  padding: '10px 12px',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#c8d5eb',
  borderRadius: '12px',
  background: '#ffffff',
  color: '#14213d',
  font: 'inherit',
}

export const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'vertical',
}

export const errorStyle: CSSProperties = {
  margin: 0,
  color: '#b42318',
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

export const primaryButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#3151a6',
  borderRadius: '12px',
  background: '#3151a6',
  color: '#ffffff',
  padding: '10px 16px',
  font: 'inherit',
  fontWeight: 700,
  cursor: 'pointer',
}
