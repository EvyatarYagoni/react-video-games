import react, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchSearchedGame } from "../actions/gamesActions";
//Website LOGO
import myLogo from "../images/wolf.png";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedGame(textInput));
    setTextInput("");
  };

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img className="my-logo" src={myLogo} alt="image" />
      </div>
      <form className="search-box">
        <input
          value={textInput}
          onChange={inputHandler}
          className="search-input"
          type="text"
        />
        <button
          type="submit"
          onClick={onSubmitHandler}
          className="search-input__btn"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
