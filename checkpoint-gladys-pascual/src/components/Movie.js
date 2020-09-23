import React from "react";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div className="show-card">
      <div className="img-wrapper">
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
      <div className="text-wrapper">
        <h3 className="movie-title">
          {movie.title} ({movie.year})
        </h3>

        <p className="genres">
          Genres: {movie.genres.map((genre) => genre).join(", ")}
        </p>
        <p className="runtime">Runtime: {movie.runtime} min </p>
      </div>
    </div>
  );
};

export default Movie;
