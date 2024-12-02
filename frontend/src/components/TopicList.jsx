import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {
  const {
    topics,
    onTopicClick } = props
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onClick={() => onTopicClick(topic.id)} />
      ))}
    </div>
  );
};

export default TopicList;
