import React from 'react';
import Movie from './Movie'; 


const MoviesList = ({ data, changeFavorites, render }) => {
 
  return (
    <div className="App">
      {data && data.movies.map(movie => <Movie movie={movie} render={render} key={movie.id} changeFavorites ={changeFavorites}/> )}
    </div>
  );
}

export default MoviesList;