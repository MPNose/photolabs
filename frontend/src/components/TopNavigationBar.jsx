import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {
    topics,
    isFavPhotoExist,
    handleTopicSelection,
    handleViewChange } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        onTopicClick={handleTopicSelection} />
      <div onClick={() => handleViewChange('favourites')}>
        <FavBadge
          isFavPhotoExist={isFavPhotoExist} />
     </div>
    </div>
  )
}

export default TopNavigation;