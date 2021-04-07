import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Menu from "./components/Menu";
import Landingpage from "./components/Landingpage";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contactme from "./components/Contactme";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const transitions = useTransition(useLocation(), {
    initial: { transform: "translate3d(0%,0,0)" },
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });
  const frag = transitions((style, item, key) => {
    // 3. Render each item
    return (
      <div>
        <animated.div style={style} key={key}>
          <Switch location={item}>
            <Route path="/" exact component={Landingpage} />
            <Route path="/About" component={Aboutme} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Contact" component={Contactme} />
          </Switch>
        </animated.div>
      </div>
    );
  });
  return (
    <div className="App">
      <Menu />
      <div>{frag}</div>
      {/* <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/About" component={Aboutme} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contactme} />{" "}
      </Switch> */}
    </div>
  );
}

export default App;
