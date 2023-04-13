import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { MovieCard } from "./MovieCard";

export const MovieDisplay = () => {
  const [movieData, setMovieData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      if (res.status === 200) {
        setMovieData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("movieData -->", movieData);
  return (
    <div>
      <label for="years">Filter By Year:</label>
      <MovieCard movieData={movieData} />
    </div>
  );
};
