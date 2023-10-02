import "./MovieCardStyle.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { title, poster_url, movie_id } = props;

  return (
    <Link to={`/movie/${movie_id}`}>
      <div className="card__container">
        <h1 className="card__title">{title}</h1>
        <img
          className="card__img"
          src={`https://image.tmdb.org/t/p/w500/${poster_url}`}
          alt="sla"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
