import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Landingpage from "./components/Landingpage";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/About" component={Aboutme} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
