import { useReducer } from "react";
//calling starting state of components
const initialState = {
  favourites: [],
  isModalOpen: false,
  selectedPhoto: null
};

const actions = {
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SET_PHOTO_SELECTED: "SET_PHOTO_SELECTED",
  CLOSE_PHOTO_MODAL: "CLOSE_PHOTO_MODAL"
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_FAVOURITE:
      const { id } = action.payload;
      const isFavourite = state.favourites.includes(id);
      const newFavourites = isFavourite 
      ? state.favourites.filter((element) => element !== id)
      : [...state.favourites, id];
      return {...state, favourites: newFavourites};

      case actions.SET_PHOTO_SELECTED:
        return {...state, selectedPhoto: action.payload, isModalOpen: true};

      case actions.CLOSE_PHOTO_MODAL:
        return {...state, selectedPhoto: null, isModalOpen: false};
        
      default:
        return state;  
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (id) => {
    dispatch({type: actions.TOGGLE_FAVOURITE, payload: {id}});
  };

  const setPhotoSelected = (photo) => {
    dispatch({type: actions.SET_PHOTO_SELECTED, payload: photo});
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({type: actions.CLOSE_PHOTO_MODAL});
  };
  const isFavPhotoExist = state.favourites.length > 0;
//helper functions to check if array full, if photo id faved
  const isPhotoFaved = (id) => state.favourites.includes(id);

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved
  }
};



export default useApplicationData;