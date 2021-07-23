import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "./redux/topicsSlice";
import Title from "./ui-library/Title";
import SearchBar from "./ui-library/SearchBar";
import Topics from "./components/Topics";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const topic = useSelector(({ topics }) => topics.topic);
  const topics = useSelector(({ topics }) => topics.relatedTopics);
  const stargazerCount = useSelector(({ topics }) => topics.stargazerCount);

  const [filteredTopic, setFilteredTopicState] = useState([]);

  useEffect(() => {
    dispatch(fetchTopics("react"));
  }, [fetchTopics]);

  const handleSearchSubmitCB = useCallback(
    ({ value }) => {
      const filterTopics = topics.filter((topic) => topic.name.includes(value));
      setFilteredTopicState(filterTopics);
    },
    [topics]
  );

  return (
    <div className="App">
      <div>
        <Title title={topic} />
        <Title title={`Star Count: ${stargazerCount}`} />
        <SearchBar onSubmit={handleSearchSubmitCB} />
        <Topics
          topics={filteredTopic.length ? filteredTopic : topics}
          onClick={(topic) => {
            dispatch(fetchTopics(topic.name));
            setFilteredTopicState([]);
          }}
        />
      </div>
    </div>
  );
}

export default App;
