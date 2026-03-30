import type { CSSProperties } from 'react'

export const cardBaseStyle: CSSProperties = {
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#dce4ef',
  borderRadius: '16px',
  background: '#fcfdff',
  padding: '18px',
  textAlign: 'left',
  cursor: 'pointer',
}

export const cardSelectedStyle: CSSProperties = {
  borderColor: '#3151a6',
  background: '#f4f7ff',
}

export const topRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
}

export const titleStyle: CSSProperties = {
  margin: '14px 0 10px',
  fontSize: '18px',
}

export const titleRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  margin: '14px 0 10px',
}

export const descriptionStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
}

export const metaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '16px',
  fontWeight: 600,
}

export const dateStyle: CSSProperties = {
  fontSize: '13px',
  color: '#5c6b84',
  whiteSpace: 'nowrap',
}

export const sourceBadgeStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: '24px',
  padding: '4px 8px',
  borderRadius: '999px',
  background: '#eef2f7',
  color: '#4c5a73',
  fontSize: '12px',
  fontWeight: 700,
  whiteSpace: 'nowrap',
}
