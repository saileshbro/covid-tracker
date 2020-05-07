import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OnboardingView from './views/onboarding_view.component'
import CompleteRegistrationView from './views/complete_registration_view.component'
import HomeScreenView from './views/home_screen_view/home_screen_view.component'
import SurveyScreenView from './views/survey_screen_view.component'
import ReportScreenView from './views/report_screen_view'
import NoticeScreenView from './views/notice_screen_view.component'
function App() {
  return (
    <Switch>
      <Route path='/' exact component={OnboardingView} />
      <Route
        path='/completeRegistration'
        exact
        component={CompleteRegistrationView}
      />
      <Route path='/home' exact component={HomeScreenView} />
      <Route path='/survey' exact component={SurveyScreenView} />
      <Route path='/report' exact component={ReportScreenView} />
      <Route path='/notice' exact component={NoticeScreenView} />
    </Switch>
  )
}

export default App
