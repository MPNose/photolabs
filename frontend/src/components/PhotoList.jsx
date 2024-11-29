import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  const {photos, toggleFavourite, isPhotoFaved, openModal} = props
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} toggleFavourite={toggleFavourite} isPhotoFaved={isPhotoFaved} openModal={openModal}/>
      ))}
      
    </ul>
  );
};

export default PhotoList;
