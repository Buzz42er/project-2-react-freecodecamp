import React from "react";

const Nav = (props) => {
  return (
    <nav className={props.darkMode ? "App-nav dark" : "App-nav"}>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default Nav;
