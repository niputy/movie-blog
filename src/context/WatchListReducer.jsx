const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};
const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";

export const WatchListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { watchList } = state;

  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        watchList: add(payload)
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        watchList: remove(payload)
      };
    default:
      return state;
  }
  function add(movie) {
    const updatedWatchList = [movie, ...watchList];
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    return updatedWatchList;
  }

  function remove(movieId) {
    const updatedWatchList = watchList.filter(movie => movie.id !== movieId);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    return updatedWatchList;
  }
};

export const addMovie = (payload) => ({ type: ADD_MOVIE, payload})
export const removeMovie = (payload) => ({ type: REMOVE_MOVIE, payload})
