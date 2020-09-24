import React from 'react';
import Movie from './Movie'; 


const MoviesList = ({ data }) => {
  console.log('movies', data);

  return (
    <div className="App">
      {data && data.movies.map(movie => <Movie movie={movie} key={movie.id}/> )}
    </div>
  );
}

export default MoviesList;