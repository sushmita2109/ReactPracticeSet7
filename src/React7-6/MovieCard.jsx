export const MovieCard = ({ movieData }) => {
  //   const genreData = movieData.reduce(
  //     (acc, curr) => (curr.genre ? "" : acc[curr.genre]),
  //     []
  //   );
  return (
    <div>
      <label htmlFor="genre">Filter by genre:</label>
      <select name="genre" id="genre">
        <option value="all">All</option>
        <option value=""></option>
      </select>
      {movieData.map((item, id) => (
        <div key={id}>
          <p>{item.title}</p>
          <p>{item.year}</p>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
};
