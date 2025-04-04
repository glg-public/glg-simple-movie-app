import { Movie } from "../../../../definitions/Movie";
import dayjs from "dayjs";

import "./MediaComponent.scss";

interface MovieProps {
  movie: Movie;
}

export const MediaComponent = (props: MovieProps) => {
  const { movie } = props;
  const image = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;

  return (
    <div className="movie-container">
      <div>
        <a href={`${movie.media_type}/${movie.id}`}>
          <img src={image} alt="poster" />
        </a>
      </div>
      <div className="title">{movie.title || movie.name}</div>
      <div className="date">{dayjs(movie.release_date || movie.first_air_date).format("MMM DD, YYYY")}</div>
    </div>
  );
};
