import React from 'react';
import Spinner from '../../../Spinner/Spinner';
import './styles.css';

const LoadingModal = () => {
  return (
    <div className='rootContainer'>
      <Spinner />
    </div>
  );
};

export default LoadingModal;
