import react from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchDetailGame } from "../actions/gamesActions";
//Router
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  //Load Detail Handler
  const dispatch = useDispatch();
  const gameDetailHandeler = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchDetailGame(game.id));
  };

  return (
    <div className="game-card" onClick={gameDetailHandeler}>
      <Link to={`/game/${game.id}`}>
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
      </Link>
    </div>
  );
};

export default Game;
