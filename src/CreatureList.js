import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';


class CreatureList extends Component {

  render() {
    const creatures = this.props.creature;

    return (
      <ul className="CreatureList">
        {creatures.map(creature => (
          <CreatureItem key={creature.name} creature={creature}/>
        ))}
      </ul>
    );
  }
}

export default CreatureList; 

