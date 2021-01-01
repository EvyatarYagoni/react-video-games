import { combineReducers } from "redux";
import gamesReducer from "./fetchGames";

const rootReducers = combineReducers({
  games: gamesReducer,
});

export default rootReducers;
