const apiUrl = "http://www.omdbapi.com/?apikey=18861e82";

export const MovieSearch = (query) => {
  const queryUrl = `${apiUrl}&s=${query}`;
  return queryUrl;
};

export const MovieById = (id) => {
  const queryUrl = `${apiUrl}&i=${id}`;
  return queryUrl;
};
