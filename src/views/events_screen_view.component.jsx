import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head/secondary_screen_head.component'
import { colors } from '../utils/color'
import eventIcon from '../assets/images/calendar.svg'
import staticImage from '../assets/images/covid.jpg'
import EventItem from '../components/event_item/event_item.component'

export default function EventsScreenView() {
  return (
    <section id='event'>
      <SecondaryScreenHead
        title='Event'
        subTitle='Upcoming events'
        color={colors.blue}
        icon={eventIcon}
      />
      <div className='wrap'>
        <EventItem
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur.'
          image={staticImage}
          time='5 minutes later'
          organizer='Buggged'
        />
        <EventItem
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur.'
          image={staticImage}
          time='5 minutes later'
          organizer='Buggged'
        />
      </div>
    </section>
  )
}
