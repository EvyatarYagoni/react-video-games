import react from "react";
//Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//style
import "./styles/app.scss";

function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
