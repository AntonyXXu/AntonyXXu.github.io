import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Landingpage from "./components/Landingpage";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contactme from "./components/Contactme";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/About" component={Aboutme} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contactme} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
