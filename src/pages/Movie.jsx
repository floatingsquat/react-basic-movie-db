import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import Spinner from "../components/Spinner";
import { FaArrowAltCircleLeft, FaImdb } from "react-icons/fa";
function Movie() {
  const { id } = useParams();
  const { getMovie, singleMovie, isLoading } = useContext(MovieContext);

  useEffect(() => {
    getMovie(id);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="smovie-container">
      <div className="smovie-left">
        <img
          className="smovie-img"
          src={singleMovie.Poster}
          alt={singleMovie.Title}
        />
      </div>
      <div className="smovie-right">
        <h1>{singleMovie.Title}</h1>
        <p>{singleMovie.Plot}</p>
        <small>{singleMovie.Year}</small>

        <small>
          <div className="imdb-rating">
            <FaImdb size="60" /> {singleMovie.imdbRating}
          </div>
        </small>
        <Link className="btn-back" to="/">
          {" "}
          <FaArrowAltCircleLeft /> Go back
        </Link>
      </div>
    </div>
  );
}

export default Movie;
