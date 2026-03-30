import type { CSSProperties } from 'react'

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

export const listStyle: CSSProperties = {
  display: 'grid',
  gap: '16px',
}

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
