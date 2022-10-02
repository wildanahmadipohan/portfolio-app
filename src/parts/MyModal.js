import React from 'react'
import './MyModal.scss';

const MyModal = ({handleClose, show, children}) => {
  const showHideClassName = show ? 'my-modal display-block' : 'my-modal display-none';

  return (
    <div className={showHideClassName}>
      <span type='button' className='close cursor' onClick={handleClose}>&times;</span>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default MyModal