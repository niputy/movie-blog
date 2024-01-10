import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};


export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };


  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        addMovie,
        removeMovie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
