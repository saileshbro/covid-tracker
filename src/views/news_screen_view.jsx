import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head'
import { colors } from '../utils/color'
import newsIcon from '../assets/images/bullhorn.svg'
import randImage from '../assets/images/covid.jpg'
import eImage from '../assets/images/ekantipur.jpg'
import { NewsItem } from '../components/news_item'
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
