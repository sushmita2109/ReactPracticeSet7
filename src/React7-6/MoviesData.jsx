import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { MovieCard } from "./MovieCard";

export const MoviesData = () => {
  const [movieData, setMovieData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      if (res.status === 200) {
        setMovieData(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <MovieCard movieData={movieData} />
    </div>
  );
};
