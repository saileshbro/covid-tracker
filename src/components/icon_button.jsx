import React from 'react'
import { IconButtonContainer } from '../styled-components'
export const IconButton = ({ text, onClick, color, icon, small }) => {
  return (
    <IconButtonContainer small onClick={onClick && onClick}>
      <div className='shape' style={{ backgroundColor: color }}>
        <img src={icon} alt='Icon' className='posCenter' />
      </div>
      {text && <p>{text}</p>}
    </IconButtonContainer>
  )
}
