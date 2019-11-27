import React, { Component } from 'react';
import MoveToVisitedForm from '../MoveToVisitedForm/MoveToVisitedForm';
import './WishlistItem.css'

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
        <div className="expanded_info">
          <a href={restaurant.restaurant.website} target="_blank" rel="noopener noreferrer"><button className="website">Go to website</button></a>
          <button type="button" className="delete_item" onClick={this.handleDelete}>Delete</button>
        </div>
        <div className="move">
          <span id="cuisine">Cuisine: {restaurant.restaurant.cuisine_name}</span>
          <div id="checkVisited">
            <label htmlFor="defaultCheckbox" className="si si-checkbox">
              <input type="checkbox" id="defaultCheckbox" checked={this.state.visited} onChange={this.toggleVisited}/>
              <span className="si-label"></span>
            </label>
            <label htmlFor="si-checkbox" id="label">Visited</label>
          </div>
          {this.state.visited ? <MoveToVisitedForm restaurant={restaurant} toggleVisited={this.toggleVisited} onMove={this.props.onMove} /> : ''}
        </div>
      </div>
    )
  }

  render() {
    const { restaurant } = this.props
    return (
      <>
        <li className="wishlist_items">
          <div className="display">
            <span>{restaurant.restaurant.name}</span>
            <span>{restaurant.restaurant.city}, {restaurant.restaurant.state}</span>

            <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
          </div>
          {this.state.expanded ? this.renderExpanded(restaurant) : ''}
        </li>
      </>
    )
  }
}