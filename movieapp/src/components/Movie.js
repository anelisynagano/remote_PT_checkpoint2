import React from 'react';


const Movie = ({ movie }) => {
  return (
    <div className="row">
      <div className="col">{movie.title}</div>
      <button className="col">Add to Favorite</button>
    </div>
  );
}

export default Movie;


