import React from 'react'
import { TextListItemContainer } from '../styled-components/index'
export default function TextListItem({ text }) {
  return (
    <TextListItemContainer className='textListItem flex jcsb ci'>
      <div className='iconText flex ci'>
        <div className='shape'></div>
        <p>{text}</p>
      </div>
      <div className='arrow'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M7.15833 13.825L10.975 10L7.15833 6.175L8.33332 5L13.3333 10L8.33332 15L7.15833 13.825Z'
            fill='#555555'
          />
        </svg>
      </div>
    </TextListItemContainer>
  )
}
