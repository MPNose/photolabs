import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const FavouritePhotos = (props) => {
  const {
    favourites,
    topics,
    toggleFavourite,
    isPhotoFaved,
    isFavPhotoExist,
    openPhotoModal,
    handleTopicSelection,
    handleViewChange } = props;

    

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        toggleFavourite={toggleFavourite}
        isFavPhotoExist={isFavPhotoExist}
        handleTopicSelection={handleTopicSelection}
        handleViewChange={handleViewChange} />

<button onClick={() => handleViewChange('home')} >
        Back to Home
      </button>

      <PhotoList photos={favourites}
        toggleFavourite={toggleFavourite}
        isPhotoFaved={isPhotoFaved}
        openPhotoModal={openPhotoModal} />
    </div>
  );
}

export default FavouritePhotos;