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
      default:
        return state;
    }
};