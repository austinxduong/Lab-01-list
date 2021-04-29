import './App.css';
import React, { Component } from 'react';
import Header from './Header';
import CreatureList from './CreatureList';
import creaturesData from './Creatures';
import Footer from './Footer';
import CreatureSearch from './CreatureSearch';

const creatureTypes = [...new Set(creaturesData.map(c => c.type))];

class App extends Component {
  state = {
    creatures: creaturesData
  }

  handleSearch = ({ nameFilter, hornFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creaturesData
      .filter(creature => {
        return !nameFilter || creature.keyword.match(nameRegex);
      })
      .filter(creature => {
        return !hornFilter || creature.horns === Number(hornFilter);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
    
  }

  render() {
    const { creatures } = this.state;

    return (
      <div className="App">
  
        <Header/>

        <CreatureSearch types={creatureTypes} onSearch={this.handleSearch}/>

        <main>
          <CreatureList creature={creatures}/>
        </main>
        
      
        <Footer/>
      </div>
    );
  }

}

export default App;
