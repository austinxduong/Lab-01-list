import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {

  render() {
    const creature = this.props.creature;

    return (
      <li className="CreatureItem">
        <h2>{creature.keyword}</h2>
        <img src={creature.url} alt={creature.name}/>
        <p>Horns: {creature.horns}</p>
      </li>
    );
  }
}

export default CreatureItem;