import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
  gameDetailUrl,
  gameScreenShotUrl,
} from "../Api/api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl);
  const upcomingData = await axios.get(upcomingGamesUrl);
  const newGamesData = await axios.get(newGamesUrl);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearchedGame = (gameName) => async (dispatch) => {
  const searchData = await axios.get(searchGameUrl(gameName));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchData.data.results,
    },
  });
};

export const fetchDetailGame = (gameID) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailUrl(gameID));
  const screenShotsData = await axios.get(gameScreenShotUrl(gameID));
  dispatch({
    type: "FETCH_DETAIL_GAME",
    payload: {
      detail: detailData.data,
      screenShots: screenShotsData.data.results,
    },
  });
};
