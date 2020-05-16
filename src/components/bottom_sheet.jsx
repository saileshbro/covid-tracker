import React from 'react'
import { BottomSheetContainer } from '../styled-components/index'
export default function BottomSheet({ visible, onClose, children }) {
  const handleClose = () => {
    onClose && onClose()
  }
  return (
    <React.Fragment>
      {visible && (
        <BottomSheetContainer>
          <div className='overlay' onClick={() => handleClose()}></div>
          <div className='contents'>
            <div className='line'></div>
            {children}
          </div>
        </BottomSheetContainer>
      )}
    </React.Fragment>
  )
}
