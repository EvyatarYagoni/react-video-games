import react, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchSearchedGame } from "../actions/gamesActions";
//Website LOGO
import myLogo from "../images/wolf.png";
//Framer motion (animation)
import { motion } from "framer-motion";

const formVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1.1,
    },
  },
};

const logoVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1.1,
    },
  },
};

const inputVariants = {
  hover: {
    scale: 1.1,
  },
};

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
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="logo-wrapper"
      >
        <img className="my-logo" src={myLogo} alt="image" />
      </motion.div>
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="search-box"
      >
        <motion.input
          value={textInput}
          onChange={inputHandler}
          className="search-input"
          type="text"
          placeholder="search your game..."
          variants={inputVariants}
          whileHover="hover"
        />
        <motion.button
          type="submit"
          onClick={onSubmitHandler}
          className="search-input__btn"
        >
          Search
        </motion.button>
      </motion.form>
    </nav>
  );
};

export default Nav;
