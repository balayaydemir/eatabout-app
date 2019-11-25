import React, { Component } from 'react';
import './ItemsEaten.css';

export default class ItemsEaten extends Component {
    render() {
        return (
            <li className="item_eaten" id={'Item-' + this.props.index}>
                <div>
                <label htmlFor="item_name">* Name of item: </label>
                <input type="text" name="item_name" onChange={this.props.handleChange}></input>
                </div>
                <div id="photo">
                <label htmlFor="photo_upload">Add a photo: </label>
                <input type="file" id="photo_upload" name="photo_upload" onChange={this.props.handleChange} ></input>
                </div>
                <div>
                <label htmlFor="item_description">Describe it: </label>
                <textarea name="item_description" placeholder="Enter description" onChange={this.props.handleChange}></textarea>
                </div>
                <div>
                <button type="button" id="cancel_item" onClick={this.props.deleteItem}>Cancel</button>
                </div>
            </li>
        )
    }
}