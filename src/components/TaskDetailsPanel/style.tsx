import type { CSSProperties } from 'react'

export const panelStyle: CSSProperties = {
  minHeight: '440px',
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
  position: 'sticky',
  top: '24px',
  alignSelf: 'start',
}

export const headerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  marginBottom: '20px',
}

export const headingStyle: CSSProperties = {
  margin: 0,
  fontSize: '18px',
  color: '#14213d',
}

export const stackStyle: CSSProperties = {
  display: 'grid',
  gap: '20px',
}

export const actionsStyle: CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
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
  fontSize: '28px',
  lineHeight: 1.1,
  color: '#14213d',
}

export const summaryGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
  gap: '12px',
}

export const summaryItemStyle: CSSProperties = {
  display: 'grid',
  gap: '6px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: '#f8faff',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d9e2f1',
}

export const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
  gap: '16px',
}

export const metaItemStyle: CSSProperties = {
  display: 'grid',
  gap: '8px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: '#fbfcfe',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e2e8f0',
}

export const labelStyle: CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#5c6b84',
}

export const summaryValueStyle: CSSProperties = {
  color: '#14213d',
  fontSize: '15px',
  lineHeight: 1.4,
}

export const descriptionBlockStyle: CSSProperties = {
  display: 'grid',
  gap: '8px',
  padding: '16px',
  borderRadius: '16px',
  background: '#fbfcfe',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e2e8f0',
}

export const descriptionStyle: CSSProperties = {
  margin: 0,
  color: '#4c5a73',
  lineHeight: 1.6,
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
  background: '#ffffff',
  color: '#b42318',
  padding: '10px 14px',
  font: 'inherit',
  fontWeight: 600,
  cursor: 'pointer',
}
