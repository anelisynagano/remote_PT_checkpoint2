import React from "react";
import Favorites from "./Favorites";

const FavoritesList = ({ results, handleRemoveFavorite }) => {
  return (
    <>
      <h1> Here are your favourites: </h1>
      <div className="movie-list">
        {results.map((movie) => (
          <Favorites
            movie={movie}
            key={movie.id}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesList;
