import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.imageSource} alt="photo" />
      <img src={props.profile} alt="profile" />
      <p>{props.username}</p>
      <p>{`${props.city}, ${props.country}`}</p>
    </div>
  )
};

export default PhotoListItem;
