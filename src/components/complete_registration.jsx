import React from 'react'
import image from '../assets/images/details.svg'
import arrow from '../assets/images/arrow_right.svg'
import {
  SwipeableItem,
  SelectField,
  FormSelect,
  FormInput,
} from '../styled-components'
export default function CompleteRegistration() {
  return (
    <SwipeableItem>
      <img src={image} alt='Fill more details' />
      <div className='gap'></div>
      <h3 className='title'>Fill more details</h3>
      <FormInput
        type='text'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
      />
      <div className='gap x2'></div>
      <SelectField className='selectField'>
        <FormSelect name='gender' placeholder='Select gender'>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </FormSelect>
        <img className='icon' src={arrow} alt='Arrow' />
      </SelectField>
    </SwipeableItem>
  )
}
