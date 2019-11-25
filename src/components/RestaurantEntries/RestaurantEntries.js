import React, { Component } from 'react';
import config from '../../config';
import './RestaurantEntries.css';


export default class RestaurantEntries extends Component {

    state = {
        expanded: false 
    }

    renderItems() {
        return this.props.entry.items.map(itm => {
            return (
                <li id="food_entry" key={itm.id}>
                    <div id="name_photo">
                    <div id="itm_name">
                    <span>{itm.name}</span>
                    </div>
                    <a href={`${config.IMG_SRC}/${itm.image}`}>
                        <img src={`${config.IMG_SRC}/${itm.image}`} alt="food"></img>
                    </a>
                    </div>
                    <p>{itm.description}</p>
                </li>
            )
        })
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const { entry, renderDate } = this.props
        return (
                <li id="restaurant_entry">
                <div id="date_expand">
                  {renderDate(entry.date)}
                <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
                </div>
                  <ul id="entry_items">
                    {this.state.expanded ? this.renderItems() : ''}
                  </ul>
                </li>
        )
    }
}