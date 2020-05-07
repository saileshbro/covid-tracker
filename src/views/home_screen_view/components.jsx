import React from 'react'
import avatar from '../../assets/images/avatar-male.png'
import more from '../../assets/images/more_vert.svg'
export const AppBar = ({ name }) => {
  return (
    <div className='appBar'>
      <div className='flex jcsb ci'>
        <div className='left flex ci'>
          <img src={avatar} alt='Avatar male' />
          <p>Hello {name}</p>
        </div>
        <div className='right'>
          <img src={more} alt='more icon' />
        </div>
      </div>
    </div>
  )
}
export const StaySafeText = () => (
  <div className='staySafe'>
    <p>
      Stay Home
      <br />
      Stay Safe
    </p>
  </div>
)