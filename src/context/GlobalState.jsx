import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import { initialSettings } from "./SettingsThemes";


const initialState = {
  settings: localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings"))
    : initialSettings,
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};

export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(state.settings));
    const root = document.documentElement;
    Object.entries(state.settings).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [state.settings]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state.watchList]);

  const settingsActions = {
    changeTheme: (payload) => dispatch({ type: "CHANGE_THEME", payload }),
    changeColor: (payload) => dispatch({ type: "CHANGE_COLOR", payload }),
    changeFontSize: (payload) => dispatch({ type: "CHANGE_FONT", payload }),
    changeAnimationSpeed: (payload) =>
      dispatch({ type: "CHANGE_ANIMATION", payload }),
  };

  const movieActions = {
    addMovie: (movie) => dispatch({ type: "ADD_MOVIE", payload: movie }),
    removeMovie: (id) => dispatch({ type: "REMOVE_MOVIE", payload: id }),
  };

  return (
    <GlobalContext.Provider value={{ ...state, settingsActions : {...settingsActions}, movieActions: {...movieActions} }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
