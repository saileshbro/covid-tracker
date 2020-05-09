import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head/secondary_screen_head.component'
import { colors } from '../utils/color'
import newsIcon from '../assets/images/bullhorn.svg'
import randImage from '../assets/images/covid.jpg'
import eImage from '../assets/images/ekantipur.jpg'
export default function NewsScreenView() {
  return (
    <section id='news'>
      <SecondaryScreenHead
        title='News'
        subTitle='Recent News'
        color={colors.orange}
        icon={newsIcon}
      />
      <div className='wrap'>
        <NewsItem
          source='Kantipur'
          time='3 hrs ago'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequuntur.'
          sourceImage={eImage}
          newsImage={randImage}
        />
        <NewsItem
          source='Kantipur'
          time='3 hrs ago'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequuntur.'
          sourceImage={eImage}
          newsImage={randImage}
        />
        <NewsItem
          source='Kantipur'
          time='3 hrs ago'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequuntur.'
          sourceImage={eImage}
          newsImage={randImage}
        />
      </div>
    </section>
  )
}

export function NewsItem({
  source,
  time,
  title,
  newsImage,
  sourceImage,
  desc,
}) {
  return (
    <div className='newsItem flex jcsb ci'>
      <div className='left'>
        <header className='flex ci'>
          <img src={sourceImage} alt='' />
          <div className='desc'>
            <div className='title'>{source}</div>
            <div className='time'>{time}</div>
          </div>
        </header>
        <p className='desc'>{title}</p>
      </div>
      <div className='right'>
        <img src={newsImage} alt='' />
      </div>
    </div>
  )
}
