import React, { Component } from 'react';
import MoveToVisitedForm from '../MoveToVisitedForm/MoveToVisitedForm';

export default class WishlistItem extends Component {
    state = {
        visited: false,
        expanded: false
    }
    toggleVisited = () => {
        this.setState({
            visited: !this.state.visited
        })
    }

    toggleExpanded = () => {
      this.setState({
        expanded: !this.state.expanded
      })
    }

    handleDelete = () => {
      return this.props.onDelete(this.props.restaurant.id)
    }

    renderExpanded(restaurant) {
      return (
        <div className="expanded">
              <div className="expanded_buttons">
                <a href={restaurant.restaurant.website} className="button">Go to website</a>
                <span>{restaurant.restaurant.cuisine_name}</span>
              </div>
              <p>{restaurant.description}</p>
              <input type="checkbox" name='visited' checked={this.state.visited} onChange={this.toggleVisited}></input>
              <label htmlFor='visited'>Visited</label>
              {this.state.visited ? <MoveToVisitedForm restaurant={restaurant} toggleVisited={this.toggleVisited} onMove={this.props.onMove} /> : ''}
          </div>
      )
    }

    render() {
        const { restaurant } = this.props
        return (
            <>
            <li>
              <div className="display">
                <span>{restaurant.restaurant.name}</span>
                <span>{restaurant.restaurant.city}, {restaurant.restaurant.state}</span>
                <button type="button" id="delete_item" onClick={this.handleDelete}>Delete</button>
                <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
              </div>
              {this.state.expanded ? this.renderExpanded(restaurant) : ''}
            </li>
            </>
        )
    }
}