import react, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchSearchedGame } from "../actions/gamesActions";

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
    <nav>
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
