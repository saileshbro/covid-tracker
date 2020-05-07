import React from 'react'
import './style.scss'
import arrowIcon from '../../assets/images/arrow_back.svg'
import { IconButton } from '../icon_button/icon_button.component'
import { withRouter } from 'react-router-dom'
export function SecondaryScreenNav({ history }) {
  return (
    <div className='secSereenNav' onClick={() => history.push('/home')}>
      <img src={arrowIcon} alt='arrow icon' />
    </div>
  )
}

const SecondaryScreenHead = ({ color, icon, title, subTitle, history }) => (
  <div className='secScreenHead'>
    <div className='gap x2'></div>
    <div className='wrap'>
      <SecondaryScreenNav history={history} />
      <div className='gap'></div>
      <header className='flex ci'>
        <IconButton color={color} icon={icon} small={true} />
        <div className='desc'>
          <p className='title'>{title}</p>
          <div className='subTitle'>{subTitle}</div>
        </div>
      </header>
    </div>
    <div className='gap x2'></div>
  </div>
)
export default withRouter(SecondaryScreenHead)
