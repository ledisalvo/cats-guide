import React from 'react';
import { closeModal } from './modalReducer';
import { useDispatch } from 'react-redux';

export default function ModalWrapper({ children, header, showOkButton }) {
  const dispatch = useDispatch();
  return (
    <div
      className='modal fade'
      id='exampleModalCenter'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              {header}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => dispatch(closeModal())}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
          <div className='modal-footer'>
            {/* <button
              type='button'
              class='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button> */}
            {showOkButton && (
              <button type='button' className='btn btn-primary'>
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
