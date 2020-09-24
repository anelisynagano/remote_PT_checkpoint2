import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'; 
import { Switch, Route } from 'react-router-dom';
import DisplayMovie from './components/DisplayMovie'; 


const App = () => {

  const [ data, setData ] = useState(null); 
  const [ render, setRender ] = useState(true); 



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
    setRender(!render); 
  }

  return (
    <div className="App">
      {data && <MoviesList data={data} changeFavorites ={changeFavorites} render={render}/> }
      {/* <Switch>
      <Route path="/movie/:id"  render={ (props) => (
              <DisplayMovie data={data}/>  
        )} />
      </Switch> */}
    </div>
  );
}

export default App;
