import { useState } from "react";

export const MovieCard = ({ movieData }) => {
  const [yearToFilter, setYearToFilter] = useState("");
  const handleYear = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "all") {
      setYearToFilter("");
    } else {
      setYearToFilter(selectedValue);
    }
  };

  const shouldFilter = (dataArray) => {
    return yearToFilter.length > 0 ? dataArray.year == yearToFilter : dataArray;
  };
  return (
    <div>
      <select onChange={handleYear} name="years" id="years">
        <option value="all">All</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      {movieData.filter(shouldFilter).map((movie, id) => (
        <div key={id}>
          <p>Name:{movie.title}</p>
          <p>Years:{movie.year}</p>
          <p>Ratting:{movie.rating}</p>
        </div>
      ))}
    </div>
  );
};
