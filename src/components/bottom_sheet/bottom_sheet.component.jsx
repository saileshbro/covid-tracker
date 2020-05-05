import React from 'react'
import './style.scss'
export default function BottomSheet({ visible, onClose, children }) {
  const handleClose = () => {
    onClose && onClose()
  }
  return (
    <React.Fragment>
      {visible && (
        <div className='bottomSheet'>
          <div className='overlay' onClick={() => handleClose()}></div>
          <div className='contents'>
            <div className='line'></div>
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
export const BottomSheetIconButton = ({ icon, text, color, onClick }) => (
  <div className='bottomSheetButton flex jcsb ci' onClick={onClick && onClick}>
    <div className='iconText flex'>
      <div className='shape' style={{ backgroundColor: color }}>
        <img src={icon} className='posCenter' alt={text} />
      </div>
      <p>{text}</p>
    </div>
    <div className='icon'>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.15833 13.825L10.975 10L7.15833 6.175L8.33332 5L13.3333 10L8.33332 15L7.15833 13.825Z'
          fill='#555555'
        />
      </svg>
    </div>
  </div>
)
