import React, { Component, useRef } from "react";
import useDimensions from "react-cool-dimensions";
import { Router, browserHistory, Route, Link } from "react-router";
// import logo from './logo.svg';

import StudioPage from "./components/StudioPage";
import "./App.css";

const Studios = (props) => (
  <div>
    <div className="links">
      <p>
        <Link to="/">Studios</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
    <StudioPage />
  </div>
);

const About = (props) => {
  const ref = useRef();
  const { width, height, entry, unobserve, observe } = useDimensions(ref, {
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
    },
  });
  return (
    <div>
      <div className="links">
        <p>
          <Link to="/">Studios</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
      </div>
      <div>This is a About Page!</div>
      <br></br>
      <div ref={ref}>
        Hi! My width is {width}px and height is {height}px
      </div>
    </div>
  );
};

const Settings = (props) => {
  const ref = useRef();
  const { width, height, entry, unobserve, observe } = useDimensions(ref, {
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
    },
  });
  return (
    <div>
      <div className="links">
        <p>
          <Link to="/">Studios</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
      </div>
      <div>This is a Settings Page!</div>
      <br></br>
      <div ref={ref}>
        Hi! My width is {width}px and height is {height}px
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Studios} />
      <Route path="/about" component={About} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
};

export default App;
