import React from 'react'
import image from '../assets/images/details.svg'
import arrow from '../assets/images/arrow_right.svg'
export default function CompleteRegistration() {
  return (
    <div className='swipeableItem'>
      <img src={image} alt='Fill more details' />
      <div className='gap'></div>
      <h3 className='title'>Fill more details</h3>
      <input
        type='text'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
      />
      <div className='gap x2'></div>
      <div className='selectField'>
        <select name='gender' placeholder='Select gender'>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <img className='icon' src={arrow} alt='Arrow' />
      </div>
    </div>
  )
}
