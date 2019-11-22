import React, { Component } from 'react';
import MoveToVisitedForm from '../MoveToVisitedForm/MoveToVisitedForm';

export default class WishlistItem extends Component {
    state = {
        visited: false
    }
    toggleVisited = () => {
        this.setState({
            visited: !this.state.visited
        })
    }
    render() {
        const { restaurant } = this.props
        return (
            <>
            <li>
              <div className="display">
                <span>{restaurant.restaurant.name}</span>
                <span>{restaurant.restaurant.city}, {restaurant.restaurant.state}</span>
                <button type="button" id="delete_item">Delete</button>
                <span id="expand">-</span>
              </div>
              <div className="expanded">
              <div className="expanded_buttons">
                <a href={restaurant.restaurant.website} className="button">Go to website</a>
                <span>{restaurant.restaurant.cuisine_name}</span>
              </div>
              <p>{restaurant.description}</p>
              <input type="checkbox" name='visited' checked={this.state.visited} onChange={this.toggleVisited}></input>
              <label htmlFor='visited'>Visited</label>
              {this.state.visited ? <MoveToVisitedForm restaurant={restaurant}/> : ''}
              </div>
            </li>
            </>
        )
    }
}