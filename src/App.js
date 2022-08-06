import Header from './comp/Header';
import Main from './comp/Main';
import Footer from './comp/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <img className='backgroundLogo' src={logo} alt="logo za pozadinu" />
      <Footer/>
    </div>
  );
}

export default App;
