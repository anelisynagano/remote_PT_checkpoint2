import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, handleUpdateFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          handleUpdateFavorite={handleUpdateFavorite}
        />
      ))}
    </div>
  );
};

export default MovieList;
