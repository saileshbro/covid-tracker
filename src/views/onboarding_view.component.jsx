import React from 'react'
import OnboardingSwipeableView from '../components/onboarting_swipeable_view.component'
import ActionButton from '../components/action_button.component'

export default function OnboardingView({ history }) {
  const handleGoogleLogin = () => {
    // TODO do google login
    history.push('/completeRegistration')
  }
  return (
    <section id='onboarding'>
      <OnboardingSwipeableView />
      <ActionButton
        text='Login with Google'
        onClick={() => handleGoogleLogin()}
      />
    </section>
  )
}
