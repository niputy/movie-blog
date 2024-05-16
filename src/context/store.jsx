import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { WatchListReducer } from "./WatchListReducer";
import { SettingsReducer } from './SettingsReducer';

const rootReducer = combineReducers({
  watchList: WatchListReducer,
  settings : SettingsReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;