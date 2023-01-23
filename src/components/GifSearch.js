import React, { useState } from "react";

function GifSearch({ onSubmitSearch }) {
  const [gifSearch, setGifSearch] = useState("");

  function handleSearchChange(e) {
    setGifSearch(e.target.value);
  }
  
  function handleSearch(e) {
    e.preventDefault();
    onSubmitSearch(gifSearch);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={gifSearch}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;