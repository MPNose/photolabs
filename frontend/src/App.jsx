import React  from 'react';
import { useState } from "react";
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
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
      
       <HomeRoute topics={topics} photos={photos} toggleFavourite={toggleFavourite} isPhotoFaved={isPhotoFaved} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default App;
