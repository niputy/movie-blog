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
    const settings = state.settings;
    localStorage.setItem("settings", JSON.stringify(settings));
    const root = document.documentElement
    for(let key in settings){
        root.style.setProperty(key, settings[key])
    }
  }, [state.settings]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state.watchList]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };

  const changeTheme = (payload) => {
    dispatch({ type: "CHANGE_THEME", payload });
  };

  const changeColor = (payload) => {
    dispatch({ type: "CHANGE_COLOR", payload });
  };

  const changeFontSize = (payload) => {
    dispatch({ type: "CHANGE_FONT", payload });
  };

  const changeAnimationSpeed = (payload) => {
    dispatch({ type: "CHANGE_ANIMATION", payload });
  };
  
  return (
    <GlobalContext.Provider
      value={{
        settings: state.settings,
        settingsActions: {
          changeTheme,
          changeColor,
          changeFontSize,
          changeAnimationSpeed,
          },
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
