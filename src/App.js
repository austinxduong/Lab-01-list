import './App.css';
import React, { Component } from 'react';
import Header from './Header';
import CreatureList from './CreatureList';
import creatures from './Creatures';
import Footer from './Footer';
import CreatureSearch from './CreatureSearch';



class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header/>

        <CreatureSearch/>

        <main>
          <CreatureList creatures={creatures}/>
        </main>
        
      
        <Footer/>
      </div>
    );
  }

}

export default App;
