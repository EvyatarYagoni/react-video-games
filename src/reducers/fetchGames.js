const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
  detailGame: { platforms: [] },
  gameScreenShots: [],
  isLoading: true,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "FETCH_DETAIL_GAME":
      return {
        ...state,
        detailGame: action.payload.detail,
        gameScreenShots: action.payload.screenShots,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
