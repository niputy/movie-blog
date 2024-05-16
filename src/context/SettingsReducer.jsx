import { themes, primaryColors, fontSizes, animationSpeeds, initialSettings } from "./SettingsThemes";

const initialState = {
  settings: localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings"))
    : initialSettings,
};

const CHANGE_THEME = "CHANGE_THEME";
const CHANGE_COLOR = "CHANGE_COLOR";
const CHANGE_FONT = "CHANGE_FONT";
const CHANGE_ANIMATION = "CHANGE_ANIMATION";
const UPDATE_SETTINGS = "UPDATE_SETTINGS";

export const SettingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { settings } = state;
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        settings: changeTheme(payload),
      };
    case CHANGE_COLOR:
      return {
        ...state,
        settings: changeColor(payload),
      };
    case CHANGE_FONT:
      return {
        ...state,
        settings: changeFontSize(payload),
      };
    case CHANGE_ANIMATION:
      return {
        ...state,
        settings: changeAnimationSpeed(payload),
      };
    case UPDATE_SETTINGS:
      return {
        ...state,
        settings: updateLocalStorage(payload),
      };
    default:
      return state;
  }

  function changeTheme(i){
    const _theme = {...themes[i]};
    let _settings = {...settings};
    for(const key in _theme){
        _settings[key] = _theme[key];
    }
    updateLocalStorage(_settings);
    return _settings;
  }

  function changeColor(i){
    const _color = primaryColors[i];
    let _settings = {...settings};
    _settings["primaryColorNumber"] = i;
    _settings["--primary-color"] = _color;
    updateLocalStorage(_settings);
    return _settings;
  }

  function changeFontSize(i){
    const _size = fontSizes[i];
    let _settings = {...settings};
    _settings["fontSizeNumber"] = i;
    _settings["--font-size"] = _size.value;
    updateLocalStorage(_settings);
    return _settings;
  }

  function changeAnimationSpeed(i){
    let _speed = animationSpeeds[i];
    let _settings = {...settings};
    _settings["animationSpeedNumber"] = i;
    _settings["--animation-speed"] = _speed.value;
    updateLocalStorage(_settings);
    return _settings;
  }
  function updateLocalStorage(updatedSettings = settings) {
    localStorage.setItem("settings", JSON.stringify(updatedSettings));
    const root = document.documentElement;
    Object.entries(updatedSettings).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    return updatedSettings;
  }
};

export const settingsActions = {
  changeTheme: (payload) => ({ type: CHANGE_THEME, payload }),
  changeColor: (payload) => ({ type: CHANGE_COLOR, payload }),
  changeFontSize: (payload) => ({ type: CHANGE_FONT, payload }),
  changeAnimationSpeed: (payload) => ({ type: CHANGE_ANIMATION, payload }),
  updateSettingsStorage: (payload) => ({ type: UPDATE_SETTINGS, payload }),
};