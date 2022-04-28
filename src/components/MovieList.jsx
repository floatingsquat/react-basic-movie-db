import React, { useEffect } from "react";
import MovieItem from "./MovieItem";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import Spinner from "../components/Spinner";

function MovieList() {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="movie-list">
      {movies?.Search?.map((item, key) => (
        <MovieItem item={item} key={key} />
      ))}
    </div>
  );
}

export default MovieList;
