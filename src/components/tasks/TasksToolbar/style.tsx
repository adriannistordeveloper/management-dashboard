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
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
}

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: 'clamp(28px, 4vw, 34px)',
  lineHeight: 1.1,
}

export const controlsCardStyle: CSSProperties = {
  display: 'grid',
  gap: '14px',
  width: '100%',
  boxSizing: 'border-box',
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

export const sortFieldGroupStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
  minWidth: '220px',
}

export const fieldLabelStyle: CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#4c5a73',
}

export const inputStyle: CSSProperties = {
  width: '100%',
  minHeight: '42px',
  padding: '10px 44px 10px 12px',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#c8d5eb',
  borderRadius: '12px',
  background: '#ffffff',
  color: '#14213d',
  font: 'inherit',
}

export const selectStyle: CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%2314213d' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  backgroundSize: '20px 20px',
}

export const actionsRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
}

export const toolbarActionsStyle: CSSProperties = {
  display: 'flex',
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

export const primaryButtonStyle: CSSProperties = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#3151a6',
  borderRadius: '12px',
  background: '#3151a6',
  color: '#ffffff',
  padding: '10px 14px',
  font: 'inherit',
  fontWeight: 700,
  cursor: 'pointer',
}
