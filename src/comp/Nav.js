import React from "react";

const Nav = (props) => {
  return (
    <nav className={props.darkMode ? "App-nav dark" : ""}>
      <p>React Course - Project 1</p>
    </nav>
  );
};

export default Nav;
