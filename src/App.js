import Header from "./comp/Header";
import Main from "./comp/Main";
import Footer from "./comp/Footer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const darkMode = () => {};

  return (
    <div className="App">
      <Header darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <img className="backgroundLogo z2" src={logo} alt="logo za pozadinu" />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
