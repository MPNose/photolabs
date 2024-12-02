import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';





const App = () => {
  const {
    favourites,
    isModalOpen,
    selectedPhoto,
    photoData,
    topicData,
    topicPhotos,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved,
    handleTopicSelection
  } = useApplicationData();




  return (
    <div className="App">

      <HomeRoute
        topics={topicData}
        photoData={photoData}
        topicPhotos={topicPhotos}
        toggleFavourite={updateToFavPhotoIds}
        isPhotoFaved={isPhotoFaved}
        isFavPhotoExist={isFavPhotoExist}
        handleTopicSelection={handleTopicSelection}
        openPhotoModal={setPhotoSelected} />

      {isModalOpen && (
        <PhotoDetailsModal
          toggleFavourite={updateToFavPhotoIds}
          isPhotoFaved={isPhotoFaved}
          isFavPhotoExist={isFavPhotoExist}
          openPhotoModal={setPhotoSelected}
          photo={selectedPhoto}
          closePhotoModal={onClosePhotoDetailsModal} />)}
    </div>
  );
};

export default App;
