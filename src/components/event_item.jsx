import React from 'react'
import { ReactComponent as CalIcon } from '../assets/images/calendar.svg'
import { EventItemContainer, EventItemHeader } from '../styled-components'
export default function EventItem({ organizer, time, title, image }) {
  return (
    <EventItemContainer>
      <EventItemHeader>
        <img src={image} alt='covid' />
        <div className='orgainzer'>
          <p>{organizer}</p>
        </div>
      </EventItemHeader>
      <div className='wrap'>
        <div className='content flex jcsb ci'>
          <div className='left'>
            <div className='time'>{time}</div>
            <div className='title'>{title}</div>
          </div>
          <div className='right'>
            <CalIcon />
          </div>
        </div>
      </div>
    </EventItemContainer>
  )
}
