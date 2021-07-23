import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const [searchState, setSearchState] = useState({ value: "" });

  const handleChangeCB = useCallback((event) => {
    setSearchState({ value: event.target.value });
  }, []);

  const handleOnSubmitCB = useCallback(
    (e) => {
      e.preventDefault();
      if (!searchState.value) return;
      onSubmit({ value: searchState.value });
      setSearchState({ value: "" });
    },
    [onSubmit, searchState]
  );

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
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
