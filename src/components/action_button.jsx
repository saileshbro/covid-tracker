import React from 'react'
import { LoginButtonComponent, LoginButton } from '../styled-components/index'
import curve from '../assets/images/curve.svg'
export default function ActionButton({ text, onClick }) {
  return (
    <LoginButtonComponent curve={curve}>
      <LoginButton onClick={onClick && onClick}>{text}</LoginButton>
    </LoginButtonComponent>
  )
}
