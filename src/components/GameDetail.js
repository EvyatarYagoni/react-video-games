import react from "react";
import { useSelector } from "react-redux";
//Router
import { useHistory } from "react-router-dom";
//IMAGES
import playstation4 from "../images/PlayStation4.png";
import playstation5 from "../images/PlayStation5.png";
import xbox from "../images/Xbox.png";
import pc from "../images/PC.png";
import nintendoSwitch from "../images/NintendoSwitch.png";

const GameDetail = () => {
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
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="card-shadow" onClick={exitDetailHandler}>
          <div className="game-detail-card">
            <div className="title">
              <div className="header">
                <h1 className="mb-1"> {gameDetail.name}</h1>
                <p className="rating mb-1">rating: {gameDetail.rating}</p>
              </div>
              <div className="info">
                <h1 className="info__header mb-1">platforms</h1>
                <div className="platforms mb-1">
                  {gameDetail.platforms.map((data) => {
                    return (
                      <img
                        className="item"
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                      ></img>
                    );
                  })}
                </div>
              </div>
            </div>

            <img
              className="background-image-game"
              src={gameDetail.background_image}
              alt="image"
            />

            <p className="description">{gameDetail.description_raw}</p>

            <div className="screenshots">
              {gameScreenShots.map((screenShot) => {
                return (
                  <img
                    className="screenshots__img"
                    key={screenShot.id}
                    src={screenShot.image}
                    alt={screenShot.image}
                  ></img>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetail;
