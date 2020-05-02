import React from 'react'
import OnboardingSwipeableView from './components/onboarting_swipeable_view.component'
function App() {
  return (
    <div>
      <OnboardingSwipeableView />
      <div className='loginButtonComponent'>
        <div className='loginButton'>
          <div className='googleImage'></div>Login With Google
        </div>
      </div>
    </div>
  )
}

export default App
