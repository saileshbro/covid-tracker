import React from 'react'
import phone from '../assets/images/phone-call.svg'
import news from '../assets/images/bullhorn.svg'
import chat from '../assets/images/message.svg'
import moreIcon from '../assets/images/Group.svg'
import { colors } from '../utils/color'
import { useState } from 'react'

import calenderIcon from '../assets/images/calendar.svg'
import surveyIcon from '../assets/images/survey.svg'
import reportIcon from '../assets/images/report.svg'
import noticeIcon from '../assets/images/bell.svg'
import BottomSheet from '../components/bottom_sheet'
import { BottomSheetIconButton } from '../components/bottom_sheet_icon_button'
import { AppBar } from '../components/appbar'
import { IconButton } from '../components/icon_button'
import { KnowMore } from '../components/know_more'
import { NepalStats } from '../components/nepal_stats'
import { GlobalStats } from '../components/global_stats'
import { StaySafeText } from '../components/stay_safe_text'

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
          <IconButton
            icon={news}
            text='News'
            onClick={() => history.push('/news')}
            color={colors.orange}
          />
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
