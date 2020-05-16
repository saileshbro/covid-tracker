import React from 'react'
import knowMore from '../assets/images/know_more.png'
import { KnowMoreContainer } from '../styled-components'
import { KnowMoreButton } from '../styled-components/index'
export const KnowMore = () => {
  return (
    <KnowMoreContainer>
      <div className='contents'>
        <p>All you need to know about coronavirus</p>
        <KnowMoreButton>Know More</KnowMoreButton>
      </div>
      <div className='illustration'>
        <img src={knowMore} alt='Know more about corona virus' />
      </div>
    </KnowMoreContainer>
  )
}
