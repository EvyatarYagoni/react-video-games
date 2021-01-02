const intial = {
  game: {},
};

const detailReducer = (state = intial, action) => {
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
