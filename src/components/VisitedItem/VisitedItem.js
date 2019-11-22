import React, { Component } from 'react';
import EditEntryForm from '../EditEntryForm/EditEntryForm';
import RestaurantsApiService from '../../services/restaurant-api-service';
import RestaurantEntries from '../RestaurantEntries/RestaurantEntries';

export default class VisitedItem extends Component {
    state = {
        edit: false,
        entries: [],
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
      return this.state.entries.map(entry => <RestaurantEntries key={entry.id} entry={entry}/>)
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
              <button type="button" id="delete_item">Delete</button>
              <span id="expand">-</span>
              </div>
              <div className="expanded">
              <div className="expanded_buttons">
               <span>Last visited: {restaurant.date_visited}</span>
              <a href={restaurant.restaurant.website} className="button">Go to website</a>
              <span>{restaurant.restaurant.cuisine_name}</span>
              <button type="button" onClick={this.toggleEdit}>Edit</button>
              </div>
              <p>{restaurant.description}</p>
              <ul className="restaurant_entries">
                {error ? <p>There was an error, try again</p> : this.renderEntries()}
              </ul>
              {this.state.edit ? <EditEntryForm toggleEdit={this.toggleEdit}/> : ''}
              </div>
            </li>
        )
    }
}