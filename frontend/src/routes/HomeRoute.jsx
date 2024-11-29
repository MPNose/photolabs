import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {topics, photos, toggleFavourite, isPhotoFaved} = props
  return (
    <div className="home-route">
      <TopNavigation topics={topics} toggleFavourite={toggleFavourite}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isPhotoFaved={isPhotoFaved}/>
    </div>
  );
};

export default HomeRoute;
