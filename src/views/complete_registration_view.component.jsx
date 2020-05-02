import React from 'react'
import CompleteRegistration from '../components/complete_registration.component'
import ActionButton from '../components/action_button.component'

export default function CompleteRegistrationView() {
  return (
    <section id='completeRegistration'>
      <CompleteRegistration />
      <ActionButton text='Complete Registration' />
    </section>
  )
}
