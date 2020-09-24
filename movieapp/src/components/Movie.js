import React, { Link } from 'react';

const Movie = ({ movie, changeFavorites }) => {
 
  return (
    <div className="row">
      <div className="col">{movie.title}</div>
      <div className="col">
        <button onClick={()=> changeFavorites(movie)}> {movie.favorite? 'remove from Favorites': 'add to Favorite'}</button>
        {/* <Link to={`movie/${movie.id}`}>
        <button>Pick to display</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Movie;


