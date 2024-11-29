import React  from 'react';
import { useState } from "react";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';





const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  }
  const closePhotoModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  }
  const toggleFavourite = (id) => {
   
    if (favourites.includes(id)) {
      return setFavourites(favourites.filter(element => element !== id));
    }
    return setFavourites([...favourites, id]);
  }
  const isFavPhotoExist = favourites.length > 0;
  const isPhotoFaved = (id) => favourites.includes(id);
  return (
    <div className="App">
      
       <HomeRoute topics={topics} photos={photos} toggleFavourite={toggleFavourite} isPhotoFaved={isPhotoFaved} isFavPhotoExist={isFavPhotoExist} openPhotoModal={openPhotoModal}/>
       {isModalOpen && (
       <PhotoDetailsModal photo={selectedPhoto} closePhotoModal={closePhotoModal}/>)}
    </div>
  );
};

export default App;
