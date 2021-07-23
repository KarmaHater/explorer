import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "../../redux/topicsSlice";
import Button from "../../ui-library/Button";
import SearchBar from "../../ui-library/SearchBar";

const Topics = () => {
  const dispatch = useDispatch();
  const topics = useSelector(({ topics }) => topics.relatedTopics);
  const [filteredTopic, setFilteredTopicState] = useState(null);
  const [clearSearchState, setClearSearchState] = useState(false);

  const handleSearchSubmitCB = useCallback(
    ({ value }) => {
      const filterTopics = topics.filter((topic) => topic.name.includes(value));
      setFilteredTopicState(filterTopics);
    },
    [topics]
  );

  const handleOnClearCB = useCallback(() => {
    setFilteredTopicState(null);
    setClearSearchState(false);
  }, []);

  return (
    <div>
      <SearchBar
        onSubmit={handleSearchSubmitCB}
        onClear={handleOnClearCB}
        shouldClear={clearSearchState}
      />
      {(filteredTopic ? filteredTopic : topics).map((topic, i) => {
        return (
          <div key={i}>
            <h3 key={topic.stargazerCount}>{topic.name}</h3>
            <Button
              onClick={() => {
                dispatch(fetchTopics(topic.name));
                handleOnClearCB();
                setClearSearchState(true);
              }}
              text={`Get topics for ${topic.name}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
