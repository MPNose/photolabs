import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {topics, photos, toggleFavourite, isPhotoFaved, isFavPhotoExist, openModal} = props
  return (
    <div className="home-route">
      <TopNavigation topics={topics} toggleFavourite={toggleFavourite} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isPhotoFaved={isPhotoFaved} openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
