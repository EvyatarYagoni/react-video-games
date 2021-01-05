import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { fetchSearchedGame } from "../actions/gamesActions";
//Website LOGO
import myLogo from "../images/wolf.png";
//Framer motion (animation)
import { motion } from "framer-motion";

//Animation
const logoVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      delay: 1.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const inputVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const searchButtonVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1.1,
      type: "spring",
      stiffness: 100,
    },
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

  //Logo Handeler (return to the HOME route)
  const logoHandeler = () => {
    dispatch({
      type: "CLEANER_SEARCH",
    });
  };

  return (
    <nav className="navbar">
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="logo-wrapper"
      >
        <img
          className="my-logo"
          src={myLogo}
          alt="wolf"
          onClick={logoHandeler}
        />
      </motion.div>
      <motion.form className="search-box">
        <motion.input
          value={textInput}
          onChange={inputHandler}
          className="search-input"
          type="text"
          placeholder="search your game..."
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.button
          type="submit"
          onClick={onSubmitHandler}
          className="search-input__btn"
          variants={searchButtonVariants}
          initial="hidden"
          animate="visible"
        >
          Search
        </motion.button>
      </motion.form>
    </nav>
  );
};

export default Nav;
