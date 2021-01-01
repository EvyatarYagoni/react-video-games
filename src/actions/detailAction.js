import axios from "axios";
import { gameDetailUrl } from "../Api/api";

//Action Creator
export const loadGameDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
