import react from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchDetailGame } from "../actions/gamesActions";
//Router
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Game = ({ game }) => {
  //Convert to String
  const stringPathID = game.id.toString();
  // const stringPathID = game.id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const gameDetailHandeler = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchDetailGame(game.id));
  };

  return (
    <motion.div
      layoutId={stringPathID}
      className="game-card"
      onClick={gameDetailHandeler}
    >
      <Link to={`/game/${game.id}`}>
        <motion.div className="game-title">
          <motion.h3 className="name-game mb-1">{game.name}</motion.h3>
          <motion.h4 className="released-game">{game.released}</motion.h4>
        </motion.div>
        <motion.div>
          <motion.img
            src={game.background_image}
            alt="game image..."
            className="img-game"
          ></motion.img>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Game;
