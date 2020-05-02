import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OnboardingView from './views/onboarding_view.component'
import CompleteRegistrationView from './views/complete_registration_view.component'
function App() {
  return (
    <Switch>
      <Route path='/' exact component={OnboardingView} />
      <Route
        path='/completeRegistration'
        exact
        component={CompleteRegistrationView}
      />
    </Switch>
  )
}

export default App
