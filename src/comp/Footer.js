import React from "react";

const Footer = (props) => {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <p className="firstPFotter">This site was built with React.js</p>
      <>
        <p className="lastPFotter">By Buzz42er</p>
      </>
    </footer>
  );
};

export default Footer;
