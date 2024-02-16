import { themes, primaryColors, fontSizes, animationSpeeds } from "./SettingsThemes";

export const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE":
        return {
          ...state,
          watchList: [action.payload, ...state.watchList],
        };
      case "REMOVE_MOVIE":
        return {
          ...state,
          watchList: state.watchList.filter(
            (id) => id !== action.payload
          ),
        };
      case "CHANGE_THEME":
        return {
          ...state,
          settings: changeTheme(action.payload),
        };
      case "CHANGE_COLOR":
        return {
          ...state,
          settings: changeColor(action.payload),
        };
      case "CHANGE_FONT":
        return {
          ...state,
          settings: changeFontSize(action.payload),
        };
      case "CHANGE_ANIMATION":
        return {
          ...state,
          settings: changeAnimationSpeed(action.payload),
        };
      default:
        return state;
    }

    function changeTheme(i){
      const _theme = {...themes[i]};
      let _settings = {...state.settings};
      for(const key in _theme){
          _settings[key] = _theme[key];
      }
      return _settings;
    }

    function changeColor(i){
      const _color = primaryColors[i];
      let _settings = {...state.settings};
      _settings["primaryColorNumber"] = i;
      _settings["--primary-color"] = _color;
      return _settings;
    }

    function changeFontSize(i){
      const _size = fontSizes[i];
      let _settings = {...state.settings};
      _settings["fontSizeNumber"] = i;
      _settings["--font-size"] = _size.value;
      return _settings;
    }

    function changeAnimationSpeed(i){
      let _speed = animationSpeeds[i];
      let _settings = {...state.settings};
      _settings["animationSpeedNumber"] = i;
      _settings["--animation-speed"] = _speed.value;
      return _settings;
  }
};