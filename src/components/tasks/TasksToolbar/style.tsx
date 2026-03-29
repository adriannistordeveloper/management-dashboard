import type { CSSProperties } from 'react'

export const toolbarStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '24px',
  alignItems: 'flex-start',
  marginBottom: '24px',
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
