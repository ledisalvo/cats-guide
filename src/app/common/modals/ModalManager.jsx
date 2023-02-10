import React from 'react';
import { useSelector } from 'react-redux';
import LoadingModal from './Loading/LoadingModal';

const ModalManager = () => {
  const modalLookup = {
    LoadingModal,
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
