//Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Router
import { Route } from "react-router-dom";
//style
import "./styles/app.scss";

function App() {
  return (
    <div>
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
