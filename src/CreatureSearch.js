import { Component } from 'react';
import './CreatureSearch.css';

export default class Search extends Component {
    state = {
      nameFilter: '',
      hornFilter: '',
      sortField: ''
    }

    handleNameFilter = ({ target }) => {
      this.setState({ nameFilter: target.value });
    }

    handleHornFilter = ({ target }) => {
      this.setState({ hornFilter: target.value });
    }

    handlerSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
      console.log(this.state);

    }

    componentDidUpdate(prevProp, prevState) {
      if (prevState !== this.state) {
        this.props.onSearch(this.state);
      }
    }

    render() {
      const { nameFilter, sortField } = this.state;

      return (
        <form className="CreatureSearch" onSubmit={this.handleSubmit}>

          <input
            name="nameFilter"
            value={nameFilter}
            onChange={this.handleNameFilter}
          />
        
        
          <select
            name="sortField"
            value={sortField}
            onChange={this.handleSearchChange}
          >
        

        
            


            <option value="">all</option>
            <option value="name">by name</option>
            <option value="horns">by horns</option>
          </select>

          <button>👀</button>

        </form>
      );
    }
}