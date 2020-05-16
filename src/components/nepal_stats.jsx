import React from 'react'
import nepalFlag from '../assets/images/nepalFlag.png'
import arrowButton from '../assets/images/arrow_btn.svg'
import { colors } from '../utils/color'
import { HomeScreenStatCard } from '../styled-components'
import StatsProgressBar from './stats_progress_bar'

export const NepalStats = () => {
  return (
    <HomeScreenStatCard>
      <header className='flex jcsb'>
        <div className='left flex'>
          <img src={nepalFlag} alt='Nepal Flag' />
          <div className='content'>
            <p className='statsOf'>Nepal </p>
            <div className='updated'>Updated six minutes ago</div>
          </div>
        </div>
        <div className='right'>
          <img src={arrowButton} alt='button' />
        </div>
      </header>
      <div className='content'>
        <div className='flex jcsb'>
          <StatsProgressBar
            keyz=' '
            value='10,807'
            color={colors.blue}
            width='100%'
          />
          <div className='hgap x2'></div>
          <StatsProgressBar
            keyz='Positive'
            value='54'
            color={colors.orange}
            width='50%'
          />
        </div>
        <div className='flex jcsb'>
          <StatsProgressBar
            keyz='Recovered'
            value='16'
            color={colors.green}
            width='10%'
          />
          <div className='hgap x2'></div>
          <StatsProgressBar
            keyz='Death'
            value='0'
            color={colors.red}
            width='2%'
          />
        </div>
      </div>
      <footer>
        <p>Source: mohp.gov.np</p>
      </footer>
    </HomeScreenStatCard>
  )
}
