function MovieDetail({ mainImg, title, runtime, genres, rating, summary }) {
  return (
    <div>
      <img src={mainImg} alt={title} />
      <h1>{title}</h1>
      <h2>Runtime : {runtime} mins</h2>
      <h3>Rating : {rating}</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
export default MovieDetail;
