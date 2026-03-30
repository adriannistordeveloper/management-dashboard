import type { CSSProperties } from 'react'

export const viewportStyle: CSSProperties = {
  position: 'fixed',
  right: '20px',
  top: '20px',
  display: 'grid',
  gap: '12px',
  width: 'min(100%, 360px)',
  zIndex: 30,
}

export const toastBaseStyle: CSSProperties = {
  borderRadius: '16px',
  padding: '14px 16px',
  boxShadow: '0 22px 50px rgba(15, 23, 42, 0.24)',
  borderWidth: '1px',
  borderStyle: 'solid',
}

export const successToastStyle: CSSProperties = {
  ...toastBaseStyle,
  borderColor: '#15803d',
  background: '#166534',
}

export const errorToastStyle: CSSProperties = {
  ...toastBaseStyle,
  borderColor: '#b42318',
  background: '#b42318',
}

export const destructiveToastStyle: CSSProperties = {
  ...toastBaseStyle,
  borderColor: '#7f1d1d',
  background: '#7f1d1d',
}

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: '15px',
  fontWeight: 700,
  color: '#ffffff',
}

export const messageStyle: CSSProperties = {
  margin: '6px 0 0',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '14px',
}
