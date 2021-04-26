import './Header.css';
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img
          className="logo"
          alt="creatures"
          src="http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi"
        />

        <h1>Creatures</h1>

      </header>
    );
  }        
}

export default Header;