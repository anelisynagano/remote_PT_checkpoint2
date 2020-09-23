import React, { useEffect, useState } from "react";
import "./App.scss";
import FavoritesList from "./components/FavoritesList";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState({
    results: [],
  });

  // Get movies
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

  // Set favourites
  const handleUpdateFavorite = (favorite) => {
    setFavoriteMovies({
      results: [...favoriteMovies.results, favorite],
    });
    console.log(favorite);
  };

  const handleRemoveFavorite = (favoriteId) => {
    const remainingFavorites = favoriteMovies.results.filter((movie) => {
      return movie.id !== favoriteId;
    });
    setFavoriteMovies({
      results: [...remainingFavorites],
    });
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      {favoriteMovies.results.length > 0 && (
        <FavoritesList
          {...favoriteMovies}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      )}
      <MovieList {...movies} handleUpdateFavorite={handleUpdateFavorite} />
    </div>
  );
};

export default App;
