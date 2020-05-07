import React from 'react'
import nepalFlag from '../../assets/images/nepalFlag.png'
import arrowButton from '../../assets/images/arrow_btn.svg'
import knowMore from '../../assets/images/know_more.png'
import phone from '../../assets/images/phone-call.svg'
import news from '../../assets/images/bullhorn.svg'
import chat from '../../assets/images/message.svg'
import moreIcon from '../../assets/images/Group.svg'
import world from '../../assets/images/world.png'
import { colors } from '../../utils/color'
import { AppBar } from './components'
import { StaySafeText } from './components'
import StatsProgressBar from '../../components/stats_progress_bar/stats_progress_bar.component'
import calenderIcon from '../../assets/images/calendar.svg'
import surveyIcon from '../../assets/images/survey.svg'
import reportIcon from '../../assets/images/report.svg'
import noticeIcon from '../../assets/images/bell.svg'
import BottomSheet, {
  BottomSheetIconButton,
} from '../../components/bottom_sheet/bottom_sheet.component'
import { useState } from 'react'
import { IconButton } from '../../components/icon_button/icon_button.component'
export default function HomeScreenView({ history }) {
  const [visible, setVisible] = useState(false)
  return (
    <section id='homeScreen'>
      <BottomSheet visible={visible} onClose={() => setVisible(!visible)}>
        <BottomSheetIconButton
          color={colors.blue}
          text='Events'
          onClick={() => history.push('/events')}
          icon={calenderIcon}
        />
        <BottomSheetIconButton
          color={colors.purple}
          onClick={() => history.push('/survey')}
          text='Survey'
          icon={surveyIcon}
        />
        <BottomSheetIconButton
          color={colors.orange}
          onClick={() => history.push('/report')}
          text='Reports'
          icon={reportIcon}
        />
        <BottomSheetIconButton
          color={colors.blue}
          text='Notices'
          onClick={() => history.push('/notice')}
          icon={noticeIcon}
        />
      </BottomSheet>
      <div className='wrap'>
        <AppBar name='Guest' />
        <StaySafeText />
        <div className='gap x2'></div>
        <div className='flex jcsb'>
          <IconButton
            conButton
            icon={phone}
            text='Contacts'
            color={colors.blue}
          />
          <IconButton icon={news} text='News' color={colors.orange} />
          <IconButton icon={chat} text='Chat' color={colors.purple} />
          <IconButton
            icon={moreIcon}
            text='More'
            color={colors.yellow}
            onClick={() => setVisible(!visible)}
          />
        </div>
        <div className='gap x2'></div>
        <KnowMore />
        <div className='gap x2'></div>
        <NepalStats />
        <div className='gap x2'></div>
        <GlobalStats />
        <div className='gap x2'></div>
      </div>
    </section>
  )
}
export const KnowMore = () => {
  return (
    <div className='knowMore'>
      <div className='contents'>
        <p>All you need to know about coronavirus</p>
        <button className='buttonKnowMore'>Know More</button>
      </div>
      <div className='illustration'>
        <img src={knowMore} alt='Know more about corona virus' />
      </div>
    </div>
  )
}

export const NepalStats = () => {
  return (
    <div className='homeScreenStatsCard'>
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
    </div>
  )
}
export const GlobalStats = () => {
  return (
    <div className='homeScreenStatsCard'>
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
    </div>
  )
}
