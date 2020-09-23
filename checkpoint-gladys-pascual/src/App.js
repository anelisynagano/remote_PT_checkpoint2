import React, { useEffect, useState } from "react";
import "./App.scss";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovies = () => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getMovies(), []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <MovieList {...movies} />
    </div>
  );
};

export default App;
