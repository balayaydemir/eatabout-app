import React, { Component } from 'react';
import config from '../../config';


export default class RestaurantEntries extends Component {

    state = {
        expanded: false
    }

    renderItems() {
        return this.props.entry.items.map(itm => {
            return (
                <li key={itm.id}>
                    <span>{itm.name}</span>
                    <img src={`${config.IMG_SRC}/${itm.image}`} alt="food"></img>
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
        console.log(entry)
        return (
                <li>
                  {renderDate(entry.date)}
                    <button type="button" id="expand" onClick={this.toggleExpanded}>{this.state.expanded ? '-' : '+'}</button>
                  <ul>
                    {this.state.expanded ? this.renderItems() : ''}
                  </ul>
                </li>
        )
    }
}