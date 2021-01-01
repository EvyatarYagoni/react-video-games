import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import { useSelector } from "react-redux";

//Components
import Game from "../components/Game";

//Api - Fetch Game Detail
import { GameDetailUrl } from "../Api/api";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const popularGames = useSelector((state) => state.popular);
  const upcomingGames = useSelector((state) => state.upcoming);
  const newGames = useSelector((state) => state.newGames);

  return (
    <div>
      {/* Popular Games List */}
      <div className="mt-3">
        <h1 className="text-orange">Popular Games</h1>
        <div className="game-list">
          {popularGames.map((game) => {
            return <Game game={game} key={game.id} id={game.id} />;
          })}
        </div>
      </div>
      {/* Upcoming Games List */}
      <div className="mt-5">
        <h1 className="text-orange">Upcoming Games</h1>
        <div className="game-list">
          {upcomingGames.map((game) => {
            return <Game game={game} key={game.id} id={game.id} />;
          })}
        </div>
      </div>
      {/* New Games List */}
      <div className="mt-5">
        <h1 className="text-orange">New Games</h1>
        <div className="game-list">
          {newGames.map((game) => {
            return <Game game={game} key={game.id} id={game.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
