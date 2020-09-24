import React from 'react';
import Movie from './Movie'; 


const MoviesList = ({ data, changeFavorites, render }) => {

 data.movies.sort((a, b)=> (b.favorite || false) - (a.favorite || false))

  return (
    <div className="App">
      {data && data.movies.map(movie => <Movie movie={movie} key={movie.id} changeFavorites ={changeFavorites}/> )}
    </div>
  );
}

export default MoviesList;