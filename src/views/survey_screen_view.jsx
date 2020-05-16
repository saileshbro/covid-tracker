import React from 'react'
import SecondaryScreenHead from '../components/secondary_screen_head'
import { colors } from '../utils/color'
import surveyIcon from '../assets/images/survey.svg'
import TextListItem from '../components/text_list_item'
export default function SurveyScreenView() {
  return (
    <section id='survey'>
      <SecondaryScreenHead
        title='Survey'
        subTitle='Help us filling the form'
        color={colors.blue}
        icon={surveyIcon}
      />
      <div className='wrap'>
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
        <TextListItem text='Survey 1' />
      </div>
    </section>
  )
}
