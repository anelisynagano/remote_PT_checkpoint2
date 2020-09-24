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

   console.log('data', data);

  return (
    <div className="App">
      <MoviesList data={data}/>
    </div>
  );
}

export default App;
