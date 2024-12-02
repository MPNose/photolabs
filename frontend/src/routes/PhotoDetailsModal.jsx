import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {
    photo,
    closePhotoModal,
    toggleFavourite,
    isPhotoFaved,
    openPhotoModal } = props;


  const objToArray = (object) => {
    const array = [];
    for (const key in object) {
      array.push(object[key]);
    }

    return array;
  }

  const photos = objToArray(photo.similar_photos);

  return (
    <div className="photo-details-modal" >


      <button
        className="photo-details-modal__close-button"
        onClick={closePhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoFavButton
        selected={isPhotoFaved(photo.id)}
        onClick={() => toggleFavourite(photo.id)}

      />
      <img
        className="photo-details-modal__image"
        src={photo.urls.regular} />

      <div className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt="profile" />
        <div className='photo-details-modal__photographer-info'>
          <p >{photo.user.username}</p>
          <p className="photo-details-modal__photographer-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList
          photos={photos}
          toggleFavourite={toggleFavourite}
          isPhotoFaved={isPhotoFaved}
          openPhotoModal={openPhotoModal} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
