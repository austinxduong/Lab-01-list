import { Component } from 'react';
import './CreatureSearch.css';

export default class CatSearch extends Component {

  render() {
    return (
      <form className="CreatureSearch">
        <input/>

        <select>
          <option value="">sort...</option>
          <option value="name"> by name</option>
          <option value="horns">by lives</option>
        </select>



        <button>🔎</button>
      </form>
    );
  }
}