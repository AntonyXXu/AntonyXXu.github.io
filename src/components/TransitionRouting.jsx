import { Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const TransitionRouting = ({ children }) => {
  // useTransition creates a function from react-spring
  const transitions = useTransition(useLocation(), {
    // Transform functions, horizontally
    initial: { transform: "translate3d(0%,0,0)" },
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });
  return transitions((style, item, key) => {
    return (
      <div>
        <animated.div style={style} key={key}>
          <Switch location={item}>
            {/* Render based on the routes passed */}
            {children}
          </Switch>
        </animated.div>
      </div>
    );
  });
};

export default TransitionRouting;
