import { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";
import MovieCard from "./components/MovieCard";
import SearchMovie from "./components/SearchMovie";

function App() {
  const [movie, setMovie] = useState("thor");
  const [data, setData] = useState(null);
  const [savedMovie, setSavedMovie] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await useFetchData(movie);
        if (data !== null) {
          setData(data);
        }
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error);
    }
  }, [movie]);

  function onSubmitMovieSearch(searchMovie) {
    if (searchMovie.length >= 1) {
      setMovie(searchMovie);
    }
  }

  function onSaveMovie(data) {
    if (!data) {
      return;
    } else {
      setSavedMovie((prevState) => {
        return {
          ...data,
        };
      });
    }
  }

  return (
    <div className="App">
      <div className="search-wrapper">
        <SearchMovie onSubmitMovieSearch={onSubmitMovieSearch} />
      </div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <MovieCard data={data} onSaveMovie={onSaveMovie} />
        </>
      )}

      {savedMovie === null ? (
        <p>No movies saved...</p>
      ) : (
        <p>{savedMovie.title}</p>
      )}
    </div>
  );
}

export default App;
