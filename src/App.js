import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OnboardingView from './views/onboarding_view'
import CompleteRegistrationView from './views/complete_registration_view'
import HomeScreenView from './views/home_screen_view'
import SurveyScreenView from './views/survey_screen_view'
import ReportScreenView from './views/report_screen_view'
import NoticeScreenView from './views/notice_screen_view'
import EventsScreenView from './views/events_screen_view'
import NewsScreenView from './views/news_screen_view'
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
      <Route path='/events' exact component={EventsScreenView} />
      <Route path='/news' exact component={NewsScreenView} />
    </Switch>
  )
}

export default App
