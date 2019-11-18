import React, { Component } from 'react';
import EditEntryForm from '../EditEntryForm/EditEntryForm';

export default class VisitedItem extends Component {
    state = {
        edit: false
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <li>
              <div className="display">
              <span>Restaurant #1</span>
              <span>4 stars</span>
              <span>SomeCity, CA</span>
              <button type="button" id="delete_item">Delete</button>
              <span id="expand">-</span>
              </div>
              <div className="expanded">
              <div className="expanded_buttons">
              <span>Last visited: November 5th, 2019</span>
              <button type="button">Website</button>
              <span>Italian</span>
              <button type="button" onClick={this.toggleEdit}>Edit</button>
              </div>
              <p>Description here</p>
              <ul className="items_eaten">
                <li>
                  What I ate:
                  <ul>
                    <li>
                      <span>Spaghetti</span>
                      <img src="#" alt="Spaghetti"></img>
                      <p>Description of Spaghetti dish</p>
                    </li>
                  </ul>
                </li>
              </ul>
              {this.state.edit ? <EditEntryForm toggleEdit={this.toggleEdit}/> : ''}
              </div>
            </li>
        )
    }
}