import React from "react";

const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : "z1"}>
      <div className="z3">
        <h1>This is my 1. SoloReact project</h1>
        <h3>What I did:</h3>

        <ul>
          <li>rearanged existing css file</li>
          <li>made setup for this page</li>
          <li>created and conencted components</li>
          <li>nested components</li>
          <li>
            rearanged just what I needed, didn't delete all like I did first
            time
          </li>
        </ul>
        <p>
          Hope you like my little static site, this are my first ones, future
          ones will be much more advanced.
        </p>

        <h3>This is part of second phase and what I did here:</h3>
        <ul>
          <li>Created button with eventListener</li>
          <li>Made function that turns thema from lite to dark and back</li>
          <li>I made that happend with turnery operator and classNames</li>
          <li>So now, it's no longer static</li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
