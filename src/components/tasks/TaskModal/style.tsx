import type { CSSProperties } from 'react'

export const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(15, 23, 42, 0.48)',
  display: 'grid',
  placeItems: 'center',
  padding: '20px',
  zIndex: 20,
}

export const modalStyle: CSSProperties = {
  width: 'min(100%, 720px)',
  background: '#ffffff',
  borderRadius: '20px',
  border: '1px solid #d7dfeb',
  boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
  padding: '24px',
  boxSizing: 'border-box',
}

export const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
  marginBottom: '20px',
}

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: '24px',
}

export const subtitleStyle: CSSProperties = {
  margin: '8px 0 0',
  color: '#4c5a73',
}

export const closeButtonStyle: CSSProperties = {
  border: 'none',
  background: 'transparent',
  color: '#5c6b84',
  font: 'inherit',
  fontSize: '24px',
  lineHeight: 1,
  cursor: 'pointer',
}
