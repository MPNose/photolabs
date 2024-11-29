import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, closePhotoModal } = props;
  return (
    <div className="photo-details-modal" >
      <button className="photo-details-modal__close-button" onClick={closePhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <p>{console.log(photo)}</p>
    </div>
  )
};

export default PhotoDetailsModal;
