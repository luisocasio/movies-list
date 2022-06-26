import { useState } from "react";

const SearchMovie = ({ onSubmitMovieSearch }) => {
  const [searchMovie, setSearchMovie] = useState("");

  function handleChange(e) {
    setSearchMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Do something here...
    onSubmitMovieSearch(searchMovie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={searchMovie}
        placeholder="search for a movie"
      />
    </form>
  );
};

export default SearchMovie;
