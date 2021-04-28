import { Component } from 'react';
import './CreatureSearch.css';

export default class Search extends Component {
    state = {
      namefilter: '',
      sortField: ''
    }

    handleNameFilter = ({ target }) => {
      this.setState({ namefilter: target.value });
    }

    handlerSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
      console.log(this.state);

    }

    render() {
      const { nameFilter, sortField } = this.state;

      return (
        <form className="CreatureSearch"onSubmit={this.handleSubmit}>

          <input
            name="nameFilter"
            value={nameFilter}
            onChange={this.handleNameFilter}
          />

          <select
            name="sortField"
            value={sortField}
            onChange={this.handlerSortField}>

            <option value="">All</option>
            <option value="name">by name</option>
            <option value="horns">by horns</option>
          </select>

          <button>👀</button>



        </form>
      );
    }
}