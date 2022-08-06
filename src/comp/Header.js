import React from 'react'
import logo from '../logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="App-header">
        <div className='header-left'>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='App-link'>ReactFacts</h2>
        </div>
        <Nav/>
    </header>
  )
}

export default Header
