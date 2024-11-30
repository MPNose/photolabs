import React  from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';





const App = () => {
  const {
    favourites,
    isModalOpen,
    selectedPhoto,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved
  } = useApplicationData();

  

  
  return (
    <div className="App">
      
       <HomeRoute 
       topics={topics} 
       photos={photos} 
       toggleFavourite={updateToFavPhotoIds} 
       isPhotoFaved={isPhotoFaved} 
       isFavPhotoExist={isFavPhotoExist} 
       openPhotoModal={setPhotoSelected}/>
       {isModalOpen && (
       <PhotoDetailsModal 
       toggleFavourite={updateToFavPhotoIds} 
       isPhotoFaved={isPhotoFaved} 
       isFavPhotoExist={isFavPhotoExist} 
       openPhotoModal={setPhotoSelected}
       photo={selectedPhoto} 
       closePhotoModal={onClosePhotoDetailsModal}/>)}
    </div>
  );
};

export default App;
