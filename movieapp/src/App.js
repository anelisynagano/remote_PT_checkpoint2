import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'; 

const App = () => {

  const [ data, setData ] = useState(null); 



  const fetchData = () => {
    fetch(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {   
    fetchData(); 
   }, []);

  const changeFavorites = (movie) => {
    movie.favorite? data.movies[movie.id-1].favorite = false : data.movies[movie.id-1].favorite = true;   
      
  }

  return (
    <div className="App">
      <MoviesList data={data} changeFavorites ={changeFavorites}/>
    </div>
  );
}

export default App;
