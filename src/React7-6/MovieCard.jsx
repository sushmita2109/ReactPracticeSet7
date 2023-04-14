import { useEffect, useState } from "react";

const getValue = (givenArray) => {
  let finalRes = {};
  givenArray.forEach((element) => {
    if (!finalRes[element.genre]) {
      finalRes[element.genre] = "";
    }
  });
  //   console.log("--->", finalRes);
  return finalRes;
};
export const MovieCard = ({ movieData }) => {
  const [getGenre, setGetGenre] = useState("");
  const genreObject = getValue(movieData);

  const handleGenre = (event) => {
    if (event.target.value === "all") {
      setGetGenre("");
    } else {
      setGetGenre(event.target.value);
    }
  };

  const shouldFilter = (dataArray) => {
    return getGenre.length > 0 ? dataArray.genre === getGenre : dataArray;
  };

  return (
    <div>
      <label htmlFor="genre">Filter by genre:</label>
      <select onChange={handleGenre} name="genre" id="genre">
        <option value="all">All</option>
        {Object.keys(genreObject).map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
      {movieData.filter(shouldFilter).map((item, id) => (
        <div key={id}>
          <p>{item.title}</p>
          <p>{item.year}</p>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
};
