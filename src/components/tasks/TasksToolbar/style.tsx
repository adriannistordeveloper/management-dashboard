import type { CSSProperties } from 'react'

export const toolbarStyle: CSSProperties = {
  display: 'flex',
  gap: '24px',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  marginBottom: '24px',
}

export const introBlockStyle: CSSProperties = {
  minWidth: '260px',
  flex: '1 1 320px',
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
  fontSize: '34px',
  lineHeight: 1.1,
}

export const noteStyle: CSSProperties = {
  maxWidth: '420px',
  margin: 0,
  color: '#4c5a73',
}

export const controlsCardStyle: CSSProperties = {
  display: 'grid',
  gap: '14px',
  minWidth: '320px',
  flex: '1 1 420px',
  padding: '18px',
  borderRadius: '18px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
}

export const controlsGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.8fr) repeat(3, minmax(140px, 1fr))',
  gap: '12px',
}

export const fieldGroupStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
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
