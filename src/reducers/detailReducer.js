const intialState = {
  game: {},
};

const detailReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
