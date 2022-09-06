import Header from "./comp/Header";
import Main from "./comp/Main";
import Footer from "./comp/Footer";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <img className="backgroundLogo" src={logo} alt="logo za pozadinu" />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
