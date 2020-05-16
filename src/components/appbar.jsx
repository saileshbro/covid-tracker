import React from 'react'
import avatar from '../assets/images/avatar-male.png'
import more from '../assets/images/more_vert.svg'
import { AppBarContainer } from '../styled-components/index'

export const AppBar = ({ name }) => (
  <AppBarContainer>
    <div className='flex jcsb ci'>
      <div className='left flex ci'>
        <img src={avatar} alt='Avatar male' />
        <p>Hello {name}</p>
      </div>
      <div className='right'>
        <img src={more} alt='more icon' />
      </div>
    </div>
  </AppBarContainer>
)
