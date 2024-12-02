import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import FavouritePhotos from 'routes/FavouritePhotos';
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
    activeView,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved,
    handleTopicSelection,
    handleViewChange
  } = useApplicationData();




  return (
    
      <div className="App">
        {activeView === 'home' && (
             <HomeRoute
              topics={topicData}
              photoData={photoData}
              topicPhotos={topicPhotos}
              toggleFavourite={updateToFavPhotoIds}
              isPhotoFaved={isPhotoFaved}
              isFavPhotoExist={isFavPhotoExist}
              handleTopicSelection={handleTopicSelection}
              openPhotoModal={setPhotoSelected}
              handleViewChange={handleViewChange} />
        )}

        {activeView === 'favourites' && (
            <FavouritePhotos
              favourites={favourites}
              topics={topicData}
              photoData={photoData}
              topicPhotos={topicPhotos}
              toggleFavourite={updateToFavPhotoIds}
              isPhotoFaved={isPhotoFaved}
              isFavPhotoExist={isFavPhotoExist}
              handleTopicSelection={handleTopicSelection}
              openPhotoModal={setPhotoSelected}
              handleViewChange={handleViewChange} />
        )}
        
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
