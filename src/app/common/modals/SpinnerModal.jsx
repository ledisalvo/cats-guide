import React from 'react';
import ModalWrapper from './ModalWrapper';
import Spinner from '../../Spinner/Spinner';

const SpinnerModal = () => {
  return (
    <ModalWrapper header='Wait a moment...'>
      <Spinner />
    </ModalWrapper>
  );
};

export default SpinnerModal;
