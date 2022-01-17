import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [moviesDetail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          key={moviesDetail.id}
          mainImg={moviesDetail.background_image_original}
          title={moviesDetail.title_long}
          runtime={moviesDetail.runtime}
          genres={moviesDetail.genres}
          rating={moviesDetail.rating}
          summary={moviesDetail.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
