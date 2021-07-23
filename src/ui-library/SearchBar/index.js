import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const SearchBar = ({ onSubmit, onClear }) => {
  const [searchState, setSearchState] = useState({ value: "" });
  const topic = useSelector(({ topics }) => topics.topic);

  useEffect(() => {
    setSearchState({ value: "" });
  }, [topic]);

  const handleOnChangeCB = useCallback((event) => {
    setSearchState({ value: event.target.value });
  }, []);

  const handleOnSubmitCB = useCallback(
    (e) => {
      e.preventDefault();
      if (!searchState.value) return;
      onSubmit({ value: searchState.value });
    },
    [onSubmit, searchState]
  );
  const handleOnClearCB = useCallback((e) => {
    e.preventDefault();
    setSearchState({ value: "" });
    onClear();
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Topic"
          value={searchState.value}
          onChange={handleOnChangeCB}
        />
        <input type="submit" value={"Search"} onClick={handleOnSubmitCB} />
        <input type="submit" value={"Clear"} onClick={handleOnClearCB} />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SearchBar;
