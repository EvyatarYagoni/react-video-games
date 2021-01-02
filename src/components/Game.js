import react from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchDetailGame } from "../actions/gamesActions";

const Game = ({ game }) => {
  //Load Details
  const dispatch = useDispatch();
  const gameDetailHandeler = () => {
    dispatch(fetchDetailGame(game.id));
  };

  return (
    <div className="game-card" onClick={gameDetailHandeler}>
      <div className="game-title">
        <h3 className="name-game mb-1">{game.name}</h3>
        <h4 className="released-game">{game.released}</h4>
      </div>
      <div>
        <img
          src={game.background_image}
          alt="game image..."
          className="img-game"
        ></img>
      </div>
    </div>
  );
};

export default Game;
