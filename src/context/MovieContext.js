import { useState, useEffect, createContext } from "react";
import { MovieSearch, MovieById } from "../config/api";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    axios
      .get(MovieSearch(query))
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  const getMovie = (id) => {
    axios
      .get(MovieById(id))
      .then((res) => {
        setSingleMovie(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        movies,
        setMovies,
        getMovie,
        singleMovie,
        setSingleMovie,
        isLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
