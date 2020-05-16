import React from 'react'
import { NewsItemContainer } from '../styled-components'
export function NewsItem({
  source,
  time,
  title,
  newsImage,
  sourceImage,
  desc,
}) {
  return (
    <NewsItemContainer className='flex jcsb ci'>
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
    </NewsItemContainer>
  )
}
