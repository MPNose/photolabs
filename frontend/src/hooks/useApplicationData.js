import { useReducer, useEffect } from "react";



//calling starting state of components
const initialState = {
  favourites: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  topicPhotos: [],
  selectedTopicId: null
};

const actions = {
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SET_PHOTO_SELECTED: "SET_PHOTO_SELECTED",
  CLOSE_PHOTO_MODAL: "CLOSE_PHOTO_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC"
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_FAVOURITE:
      const { id } = action.payload;
      const isFavourite = state.favourites.includes(id);
      const newFavourites = isFavourite
        ? state.favourites.filter((element) => element !== id)
        : [...state.favourites, id];
      return { ...state, favourites: newFavourites };

    case actions.SET_PHOTO_SELECTED:
      return { ...state, selectedPhoto: action.payload, isModalOpen: true };

    case actions.CLOSE_PHOTO_MODAL:
      return { ...state, selectedPhoto: null, isModalOpen: false };

    case actions.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload }

    case actions.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }

    case actions.GET_PHOTOS_BY_TOPICS:
      return { ...state, topicPhotos: action.payload }

    case actions.SET_SELECTED_TOPIC:
      return { ...state, selectedTopicId: action.payload }

    default:
      return state;
  }
};



const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    if (state.selectedTopicId) {
    fetch(`/api/topics/photos/${state.selectedTopicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.GET_PHOTOS_BY_TOPICS, payload: data }))
    }
  }, [state.selectedTopicId]);

  const handleTopicSelection = (topicId) => {
    dispatch({ type: actions.SET_SELECTED_TOPIC, payload: topicId})
  };


  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: actions.SET_TOPIC_DATA, payload: data }))
  })


  const updateToFavPhotoIds = (id) => {
    dispatch({ type: actions.TOGGLE_FAVOURITE, payload: { id } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: actions.SET_PHOTO_SELECTED, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: actions.CLOSE_PHOTO_MODAL });
  };
  const isFavPhotoExist = state.favourites.length > 0;
  //helper functions to check if array full, if photo id faved
  const isPhotoFaved = (id) => state.favourites.includes(id);

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    photoData: state.photoData,
    topicData: state.topicData,
    topicPhotos: state.topicPhotos,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    isFavPhotoExist,
    isPhotoFaved,
    handleTopicSelection
  }
};



export default useApplicationData;