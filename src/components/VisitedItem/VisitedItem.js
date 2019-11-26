import React, { Component } from 'react';
import EditEntryForm from '../EditEntryForm/EditEntryForm';
import RestaurantsApiService from '../../services/restaurant-api-service';
import RestaurantEntries from '../RestaurantEntries/RestaurantEntries';
import './VisitedItem.css'

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
      return this.state.entries.map(entry => <RestaurantEntries key={entry.id} entry={entry} renderDate={this.renderDate} />)
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
        <div id="expanded_info">
        <span>Last visited: {this.renderDate(restaurant.date_visited)}</span>
          <span>Cuisine: {restaurant.restaurant.cuisine_name}</span>
          <span>{restaurant.rating} &#9734;</span>
          </div>
        <div id="expanded_buttons">
        <a href={restaurant.restaurant.website}><button className="website">Go to website</button></a>
        <button type="button" className="edit" onClick={this.toggleEdit}>Add new visit</button>
        <button type="button" className="delete_item" onClick={this.handleDelete}>Delete</button>
        </div>
        <p>{restaurant.description}</p>
        {this.state.edit ? <EditEntryForm toggleEdit={this.toggleEdit} restaurant={this.props.restaurant} onEdit={this.props.onEdit}/> : ''}
        <ul className="restaurant_entries">
          <span>Past visits</span>
          <div id="underline"></div>
          {error ? <p>There was an error, try again</p> : this.renderEntries()}
        </ul>
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
              <span>{restaurant.restaurant.city}, {restaurant.restaurant.state}</span>
              <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
              </div>
              {this.state.expanded ? this.renderExpanded(restaurant, error) : ''}
            </li>
        )
    }
}