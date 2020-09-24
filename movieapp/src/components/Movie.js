import React from 'react';


const Movie = ({ movie, changeFavorites  }) => {


  return (
    <div className="row">
      <div className="col">{movie.title}</div>
      <div className="col">
        <button onClick={()=> changeFavorites(movie)}> {movie.favorite? 'remove from Favorites': 'add to Favorite'}</button>
      </div>
    </div>
  );
}

export default Movie;


