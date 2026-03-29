import type { CSSProperties } from 'react'

export const dashboardShellStyle: CSSProperties = {
  minHeight: '100vh',
  padding: '32px',
  background: '#f4f7fb',
  color: '#14213d',
  boxSizing: 'border-box',
}

export const dashboardGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)',
  gap: '24px',
}

export const singleColumnGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: '24px',
}

export const panelStyle: CSSProperties = {
  background: '#ffffff',
  border: '1px solid #d7dfeb',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)',
}
