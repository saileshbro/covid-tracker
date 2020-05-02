import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import stayUpdatedImage from '../assets/images/stay_updated.svg'
import readNewsImage from '../assets/images/read_news.svg'
import stayAlertImage from '../assets/images/stay_alert.svg'

const Item = ({ image, desc, title }) => {
  return (
    <div className='swipeableItem'>
      <img src={image} alt='Stay Updated' />
      <div className='gap'></div>
      <h3 className='title'>{title}</h3>
      <p className='desc'>{desc}</p>
    </div>
  )
}
export default function OnboardingSwipeableView() {
  const [index, setIndex] = useState(0)
  const handleIndexChange = index => setIndex(index)
  const isActive = i => i === index && 'active'
  return (
    <div className='OnboardingSwipeableView'>
      <SwipeableViews index={index} onChangeIndex={handleIndexChange}>
        <Item
          image={stayUpdatedImage}
          title='Stay Updated'
          desc='Lorem ipsum dolor sit amet.'
        />
        <Item
          image={stayAlertImage}
          title='Stay Alert'
          desc='Lorem ipsum dolor sit amet.'
        />
        <Item
          image={readNewsImage}
          title='Stay Updated'
          desc='Lorem ipsum dolor sit amet.'
        />
      </SwipeableViews>
      <div className='pagination'>
        <div className={`dots ${isActive(0)}`}></div>
        <div className={`dots ${isActive(1)}`}></div>
        <div className={`dots ${isActive(2)}`}></div>
      </div>
    </div>
  )
}
