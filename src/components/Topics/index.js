import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui-library/Button";

const Topics = ({ topics, onClick }) => {
  console.log(topics);
  return (
    <div>
      {topics.map((topic, i) => {
        return (
          <div key={i}>
            <h3 key={topic.stargazerCount}>{topic.name}</h3>
            <Button
              onClick={() => onClick(topic)}
              text={`Get topics for ${topic.name}`}
            />
          </div>
        );
      })}
    </div>
  );
};

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Topics;
