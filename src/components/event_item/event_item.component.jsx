import React from 'react'
import staticImage from '../../assets/images/covid.jpg'
import { ReactComponent as CalIcon } from '../../assets/images/calendar.svg'
export default function EventItem({ organizer, time, title }) {
  return (
    <div className='eventItem'>
      <header>
        <img src={staticImage} alt='covid' />
        <div className='orgainzer'>
          <p>{organizer}</p>
        </div>
      </header>
      <div className='wrap'>
        <div className='content flex jcsb ci'>
          <div className='left'>
            <di className='time'>{time}</di>
            <div className='title'>{title}</div>
          </div>
          <div className='right'>
            <CalIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
