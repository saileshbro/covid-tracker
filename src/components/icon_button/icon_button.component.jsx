import React from 'react'
import './style.scss'
export const IconButton = ({ text, onClick, color, icon, small }) => {
  return (
    <div
      className={`iconButton ${small ? 'small' : ''}`}
      onClick={onClick && onClick}>
      <div className='shape' style={{ backgroundColor: color }}>
        <img src={icon} alt='Icon' className='posCenter' />
      </div>
      {text && <p>{text}</p>}
    </div>
  )
}
