import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Landingpage from "./components/Landingpage";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contactme from "./components/Contactme";
import TransitionRouting from "./components/TransitionRouting";

function App() {
  return (
    <div className="App">
      <Menu />
      <TransitionRouting>
        <Route path="/" exact component={Landingpage} />
        <Route path="/About" component={Aboutme} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contactme} />{" "}
      </TransitionRouting>
    </div>
  );
}

export default App;
