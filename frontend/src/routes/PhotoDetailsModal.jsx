import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { closePhotoModal } = props;
  return (
    <div className="photo-details-modal" onClick={closePhotoModal}>
      <button className="photo-details-modal__close-button" onClick={closePhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
