import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {

  render() {
    const creature = this.props.creature;

    return (
      <li className="CreatureItem">
        <h2>{creature.name}</h2>
        <img src={creature.url} alt={creature.name}/>
        <p>Lives: {creature.lives}</p>
      </li>
    );
  }
}

export default CreatureItem;