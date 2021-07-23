import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "./redux/topicsSlice";
import Title from "./ui-library/Title";
import Topics from "./components/Topics";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const topic = useSelector(({ topics }) => topics.topic);
  const stargazerCount = useSelector(({ topics }) => topics.stargazerCount);

  useEffect(() => {
    dispatch(fetchTopics("react"));
  }, [fetchTopics]);

  return (
    <div className="App">
      <div>
        <Title title={topic} />
        <Title title={`Star Count: ${stargazerCount}`} />
        <Topics />
      </div>
    </div>
  );
}

export default App;
