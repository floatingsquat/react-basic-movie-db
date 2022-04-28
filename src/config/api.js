const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_FIRST_KEY}`;

export const MovieSearch = (query) => {
  const queryUrl = `${apiUrl}&s=${query}`;
  return queryUrl;
};

export const MovieById = (id) => {
  const queryUrl = `${apiUrl}&i=${id}`;
  return queryUrl;
};
