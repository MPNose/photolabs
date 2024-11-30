import { useState } from "react";

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const updateToFavPhotoIds = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(element => element !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const isFavPhotoExist = favourites.length > 0;
  
  const isPhotoFaved = (id) => favourites.includes(id);

  return {
    favourites,
    isModalOpen,
    selectedPhoto,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved
  };

}

export default useApplicationData;