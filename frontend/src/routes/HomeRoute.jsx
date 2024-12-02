import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    topics,
    photoData,
    toggleFavourite,
    isPhotoFaved,
    isFavPhotoExist,
    openPhotoModal,
    topicPhotos,
    handleTopicSelection } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        toggleFavourite={toggleFavourite}
        isFavPhotoExist={isFavPhotoExist}
        handleTopicSelection={handleTopicSelection} />

      <PhotoList photos={topicPhotos.length > 0 ? topicPhotos : photoData}
        toggleFavourite={toggleFavourite}
        isPhotoFaved={isPhotoFaved}
        openPhotoModal={openPhotoModal} />
    </div>
  );
};

export default HomeRoute;
