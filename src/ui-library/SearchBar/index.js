import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
const SearchBar = ({ onSubmit, onClear, shouldClear }) => {
  useEffect(() => {
    if (shouldClear) {
      setSearchState({ value: "" });
    }
  }, [shouldClear]);

  const [searchState, setSearchState] = useState({ value: "" });

  const handleChangeCB = useCallback((event) => {
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
          onChange={handleChangeCB}
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
  shouldClear: PropTypes.bool.isRequired,
};

export default SearchBar;