import type { CSSProperties } from 'react'

export const toolbarStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'stretch',
  marginBottom: '24px',
}

export const introBlockStyle: CSSProperties = {
  width: '100%',
}

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: '34px',
  lineHeight: 1.1,
}

export const controlsCardStyle: CSSProperties = {
  display: 'grid',
  gap: '14px',
  width: '100%',
  padding: '18px',
  borderRadius: '18px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
}

export const controlsGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
  gap: '12px',
}

export const fieldGroupStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
}

export const searchFieldGroupStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
  gridColumn: '1 / -1',
}

export const fieldLabelStyle: CSSProperties = {
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

export const actionsRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
}

export const summaryStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
  fontSize: '14px',
}

export const resetButtonStyle: CSSProperties = {
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
