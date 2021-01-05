import { useSelector } from "react-redux";
//Router
import { useHistory } from "react-router-dom";
//IMAGES
import playstation4 from "../images/PlayStation4.png";
import playstation5 from "../images/PlayStation5.png";
import xbox from "../images/Xbox.png";
import pc from "../images/PC.png";
import nintendoSwitch from "../images/NintendoSwitch.png";
import ios from "../images/ios.png";
import linux from "../images/Linux.png";
import macOS from "../images/macOS.png";
import randomGame from "../images/randomGame.svg";
//Star Images
import starEmpty from "../images/empty-star.png";
import starFull from "../images/full-star.png";
//Framer Motion animation
import { motion } from "framer-motion";

const GameDetail = ({ pathID }) => {
  const gameDetail = useSelector((state) => state.detailGame);
  const gameScreenShots = useSelector((state) => state.gameScreenShots);
  const isLoading = useSelector((state) => state.isLoading);
  //Use History path
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //GET Star Images
  const getStar = () => {
    const stars = [];
    const rating = Math.floor(gameDetail.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img
            src={starFull}
            alt="full star"
            key={i}
            className="star-image"
          ></img>
        );
      } else {
        stars.push(
          <img
            src={starEmpty}
            alt="empty star"
            key={gameDetail.id}
            className="empty-star-image"
          ></img>
        );
      }
    }
    return stars;
  };

  //Get Platform Image
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation4;
      case "PlayStation 5":
        return playstation5;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return pc;
      case "Nintendo Switch":
        return nintendoSwitch;
      case "iOS":
        return ios;
      case "Linux":
        return linux;
      case "macOS":
        return macOS;
      default:
        return randomGame;
    }
  };

  return (
    <>
      {!isLoading && (
        <motion.div className="card-shadow" onClick={exitDetailHandler}>
          <motion.div layoutId={pathID} className="game-detail-card">
            <motion.div className="title">
              <motion.div className="header">
                <h1 className="mb-1"> {gameDetail.name}</h1>
                <motion.div className="rating-section mb-1">
                  <p className="rating">rating: {gameDetail.rating}</p>
                  {getStar()}
                </motion.div>
              </motion.div>
              <motion.div className="info">
                <h1 className="info__header mb-1">platforms</h1>
                <motion.div className="platforms mb-1">
                  {gameDetail.platforms.map((data) => {
                    return (
                      <motion.img
                        className="item"
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                      ></motion.img>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.img
              className="background-image-game"
              src={gameDetail.background_image}
              alt="image"
            />

            <p className="description">{gameDetail.description_raw}</p>

            <motion.div className="screenshots">
              {gameScreenShots.map((screenShot) => {
                return (
                  <motion.img
                    className="screenshots__img"
                    key={screenShot.id}
                    src={screenShot.image}
                    alt={screenShot.image}
                  ></motion.img>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
