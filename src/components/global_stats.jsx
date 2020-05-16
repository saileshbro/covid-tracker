import React from 'react'
import world from '../assets/images/world.png'
import arrowButton from '../assets/images/arrow_btn.svg'
import { colors } from '../utils/color'
import { HomeScreenStatCard } from '../styled-components'
import StatsProgressBar from './stats_progress_bar'

export const GlobalStats = () => {
  return (
    <HomeScreenStatCard>
      <header className='flex jcsb'>
        <div className='left flex'>
          <img src={world} alt='Globe' />
          <div className='content'>
            <p className='statsOf'>Global</p>
            <div className='updated'>Updated six minutes ago</div>
          </div>
        </div>
        <div className='right'>
          <img src={arrowButton} alt='button' />
        </div>
      </header>
      <div className='content'>
        <StatsProgressBar
          keyz='Cases'
          value='3,106,700'
          color={colors.blue}
          width='100%'
        />
        <StatsProgressBar
          keyz='Recovered'
          value='944,593'
          color={colors.green}
          width='15%'
        />
        <StatsProgressBar
          keyz='Active'
          value='1,947,462'
          color={colors.orange}
          width='67%'
        />
        <StatsProgressBar
          keyz='Death'
          value='214,645'
          color={colors.red}
          width='7%'
        />
      </div>
      <div className='textButton'>
        <a href='!#'>Statistics by Country</a>
      </div>
      <footer>
        <p>Source: worldometers.info</p>
      </footer>
    </HomeScreenStatCard>
  )
}
