import { combineReducers } from "redux";
import gamesReducer from "./fetchGames";
// import detailReducer from "./detailReducer";
import detailGameReducer from "./detailGameReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  detail: detailGameReducer,
});

export default rootReducers;
