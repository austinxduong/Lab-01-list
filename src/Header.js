import './Header.css';
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img
          className="logo"
          alt="creatures"
          src="./heart.png"
        />

        <h1>Creatures</h1>

      </header>
    );
  }        
}

export default Header;