import React, { Component } from 'react';

export default class RestaurantEntries extends Component {

    renderItems() {
        return this.props.entry.items.map(itm => {
            return (
                <li key={itm.id}>
                    <span>{itm.name}</span>
                    <img src={itm.image} alt="food"></img>
                    <p>{itm.description}</p>
                </li>
            )
        })
    }

    render() {
        const { entry } = this.props
        return (
                <li>
                  {entry.date}
                  <ul>
                    {this.renderItems()}
                  </ul>
                </li>
        )
    }
}