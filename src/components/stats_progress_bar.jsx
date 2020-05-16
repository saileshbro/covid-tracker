import React from 'react'
import { StatsProgressBarContainer } from '../styled-components'
export default function StatsProgressBar({ keyz, value, color, width }) {
  return (
    <StatsProgressBarContainer>
      <header>
        <p>{keyz}</p>
        <p>{value}</p>
      </header>
      <div className='bar full'></div>
      <div
        className='bar complete'
        style={{ backgroundColor: color, width: width }}></div>
    </StatsProgressBarContainer>
  )
}
