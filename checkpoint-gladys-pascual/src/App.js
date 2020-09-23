import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

const App = () => {
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getMovie(), []);

  console.log(movie);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default App;
