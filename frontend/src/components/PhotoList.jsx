import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  const {
    photos,
    toggleFavourite,
    isPhotoFaved,
    openPhotoModal } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          isPhotoFaved={(id) => isPhotoFaved(id)}
          openPhotoModal={openPhotoModal} />
      ))}

    </ul>
  );
};

export default PhotoList;
