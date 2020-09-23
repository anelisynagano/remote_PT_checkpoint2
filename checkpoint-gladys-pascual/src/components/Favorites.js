import React from "react";
// import Movie from "./Movie";

// const Favorites = ({ favoriteMovies }) => {
//   const favoriteMovie = favoriteMovies.results.map((movie) => {
//     return (
//       <div>
//         <Movie movie={movie} key={movie.id} />
//       </div>
//     );
//   });

//   return (
//     <>
//       <h2 className="favorites-heading"> Here are your top picks: </h2>
//       <div className="favorites">
//         <div>{favoriteMovie}</div>
//       </div>
//     </>
//   );
// };

const Favorites = ({ movie, handleRemoveFavorite }) => {
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
      <div>
        <button onClick={() => handleRemoveFavorite(movie.id)}>
          {" "}
          Remove to favorite!
        </button>
      </div>
    </div>
  );
};

export default Favorites;
