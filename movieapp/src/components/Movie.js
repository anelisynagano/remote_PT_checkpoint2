import React from 'react';


const Movie = ({ movie }) => {
  return (
    <div className="row">
      <div className="col">{movie.title}</div>
      <div className="col">
        <button>Add to Favorite</button>
        <button>Remove from Favorite</button>
      </div>
    </div>
  );
}

export default Movie;


