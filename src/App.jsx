import { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";
import MovieCard from "./components/MovieCard";
import SearchMovie from "./components/SearchMovie";

function App() {
  const [movie, setMovie] = useState("scarface");
  const [data, setData] = useState(null);
  console.log("Init", data);

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

  return (
    <div className="App">
      <div className="search-wrapper">
        <SearchMovie onSubmitMovieSearch={onSubmitMovieSearch} />
      </div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <MovieCard
          title={data.Title}
          director={data.Director}
          rated={data.Rated}
          released={data.Released}
          runtime={data.Runtime}
          boxOffice={data.BoxOffice}
          plot={data.Plot}
          poster={data.Poster}
        />
      )}
    </div>
  );
}

export default App;
