import React from 'react'

export default function ActionButton({ text, onClick }) {
  return (
    <div className='loginButtonComponent'>
      <div className='loginButton' onClick={onClick && onClick}>
        {text}
      </div>
    </div>
  )
}
