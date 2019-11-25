import React, { Component } from 'react';

export default class ItemsEaten extends Component {
    render() {
        return (
            <li id={'Item-' + this.props.index}>
                <label htmlFor="item_name">* Name of item:</label>
                <input type="text" name="item_name" onChange={this.props.handleChange}></input>
                <label htmlFor="photo_upload">Add a photo: </label>
                <input type="file" id="photo_upload" name="photo_upload" onChange={this.props.handleChange} ></input>
                <label htmlFor="item_description">Describe it:</label>
                <textarea name="item_description" placeholder="Enter description" onChange={this.props.handleChange}></textarea>
                <button type="button" onClick={this.props.deleteItem}>Delete</button>
            </li>
        )
    }
}