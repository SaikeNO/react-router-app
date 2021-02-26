import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <animated.img style={props} src={img1} alt="miasto"></animated.img>
          )}
        />
        <Route
          path="/products"
          render={() => <img src={img2} alt="miasto"></img>}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="miasto"></img>}
        />
        <Route
          path="/admin"
          render={() => <img src={img1} alt="miasto"></img>}
        />
        <Route render={() => <img src={img1} alt="miasto"></img>} />
      </Switch>
    </>
  );
};

export default Header;
