import React, { Component } from 'react';
import EditEntryForm from '../EditEntryForm/EditEntryForm';
import RestaurantsApiService from '../../services/restaurant-api-service';
import RestaurantEntries from '../RestaurantEntries/RestaurantEntries';

export default class VisitedItem extends Component {
    state = {
        edit: false,
        entries: [],
        expanded: false,
        error: null
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    
    componentDidMount() {
      this.setState({ error: null })
      RestaurantsApiService.getRestaurantEntries(this.props.restaurant.id)
        .then(entries => {
          this.setState({ entries })
        })
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
    }

    renderEntries() {
      return this.state.entries.map(entry => <RestaurantEntries key={entry.id} entry={entry} renderDate={this.renderDate}/>)
    }

    handleDelete = () => {
      return this.props.onDelete(this.props.restaurant.id)
    }

    toggleExpanded = () => {
      this.setState({
        expanded: !this.state.expanded
      })
    }

    renderExpanded(restaurant, error) {
      return (
        <div className="expanded">
        <div className="expanded_buttons">
         <span>Last visited: {this.renderDate(restaurant.date_visited)}</span>
        <a href={restaurant.restaurant.website} className="button">Go to website</a>
        <span>{restaurant.restaurant.cuisine_name}</span>
        <button type="button" onClick={this.toggleEdit}>Edit</button>
        </div>
        <p>{restaurant.description}</p>
        <ul className="restaurant_entries">
          {error ? <p>There was an error, try again</p> : this.renderEntries()}
        </ul>
        {this.state.edit ? <EditEntryForm toggleEdit={this.toggleEdit} restaurant={this.props.restaurant}/> : ''}
        </div>
      )
    }

    renderDate(date) {
      const year = date.slice(0, 4)
      const day = date.slice(8, 10)
      const month = date.slice(5, 7)

      return `${month}/${day}/${year}`
    }

    render() {
        const { restaurant } = this.props
        const { error } = this.state
        return (
            <li>
              <div className="display">
              <span>{restaurant.restaurant.name}</span>
              <span>{restaurant.rating} stars</span>
              <span>{restaurant.restaurant.city}</span>
              <button type="button" id="delete_item" onClick={this.handleDelete}>Delete</button>
              <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
              </div>
              {this.state.expanded ? this.renderExpanded(restaurant, error) : ''}
            </li>
        )
    }
}