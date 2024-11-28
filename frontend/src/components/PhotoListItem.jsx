import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} alt="photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} alt="profile" />
        <div className="photo-list__user-info">
          <p >{props.photo.username}</p>
          <p className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
