import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const [favourite, setFavourite] = useState(false);
  // set use state to false, prev changes condition to not prev whenever
  // toggleFavourite is called 
  const toggleFavourite = () => {
    setFavourite((prev) => !prev);
  }
  const {photo} = props
  return (
    <div className="photo-list__item">
       {/* props passed to photofavbutton  */}
      <PhotoFavButton
        selected={favourite}
        onClick={toggleFavourite}
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
