import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ item }) {
  return (
    <Link key={item.id} to={`/movie/${item.imdbID}`}>
      <div className="movie-item">
        {item.Poster !== "N/A" ? (
          <img src={item.Poster} className="movie-image" alt={item.Title} />
        ) : (
          <img
            src="http://placehold.jp/300x432.png"
            alt={item.Title}
            className="movie-image"
          />
        )}
        <h5 className="movie-name">{item.Title}</h5>
      </div>
    </Link>
  );
}

export default MovieItem;
