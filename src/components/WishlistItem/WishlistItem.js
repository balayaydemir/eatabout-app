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
        return (
            <>
            <li>
              <div className="display">
              <span>Restaurant #1</span>
              <span>SomeCity, CA</span>
              <button type="button" id="delete_item">Delete</button>
              <span id="expand">-</span>
              </div>
              <div className="expanded">
              <div className="expanded_buttons">
              <button type="button">Website</button>
              <span>Italian</span>
              </div>
              <p>Description here</p>
              <input type="checkbox" name='visited' checked={this.state.visited} onChange={this.toggleVisited}></input>
              <label htmlFor='visited'>Visited</label>
              {this.state.visited ? <MoveToVisitedForm /> : ''}
              </div>
            </li>
            </>
        )
    }
}