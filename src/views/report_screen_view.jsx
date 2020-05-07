import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head/secondary_screen_head.component'
import { colors } from '../utils/color'
import reportIcon from '../assets/images/report.svg'
import TextListItem from '../components/text_list_item/text_list_item.component'
export default function ReportScreenView() {
  return (
    <section id='report'>
      <SecondaryScreenHead
        title='Report'
        subTitle='Help us filling the form'
        color={colors.orange}
        icon={reportIcon}
      />
      <div className='wrap'>
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
        <TextListItem text='Report 1' />
      </div>
    </section>
  )
}
