import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
 
  const {photo, toggleFavourite, isPhotoFaved} = props
  return (
    <div className="photo-list__item">
      
      <PhotoFavButton
        selected={isPhotoFaved(photo.id)}
        onClick={() => toggleFavourite(photo.id)}
        
      />
      <img className="photo-list__image" src={photo.urls.regular} alt="photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="profile" />
        <div className="photo-list__user-info">
          <p >{photo.user.username}</p>
          <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
