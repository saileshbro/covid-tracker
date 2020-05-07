import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head/secondary_screen_head.component'
import { colors } from '../utils/color'
import noticeIcon from '../assets/images/bell.svg'
import TextListItem from '../components/text_list_item/text_list_item.component'
export default function NoticeScreenView() {
  return (
    <section id='notice'>
      <SecondaryScreenHead
        title='Notice'
        subTitle='Help us filling the form'
        color={colors.blue}
        icon={noticeIcon}
      />
      <div className='wrap'>
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
        <TextListItem text='Notice 1' />
      </div>
    </section>
  )
}
