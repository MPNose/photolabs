import React from 'react';
// import PhotoList from 'components/PhotoList';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      {/* <TopNavigation/>
      
       <PhotoList /> */}
       <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
