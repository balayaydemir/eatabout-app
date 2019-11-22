import React, { Component } from 'react';
import RestaurantsApiService from '../../services/restaurant-api-service';


export default class MoveToVisitedForm extends Component {

    state = { 
      error: null,
      // visited_on: null,
      items: []
    }

    // setVisitedDate = e => {
    //   this.setState({ visited_on: e.target.value })
    // }

    moveToVisited = e => {
      e.preventDefault();
      const { restaurant } = this.props
      const { rating, visited_date, notes }  = e.target
      const body = {
        visited: true,
        rating: rating.value,
        date_visited: visited_date.value,
        description: notes.value
      }

      RestaurantsApiService.editUserRestaurant(restaurant.id, body)
        .then(() => {
          const newEntry = {
            date: visited_date.value,
            user_restaurant_id: restaurant.id,
            user_id: restaurant.user_id
          }
          return RestaurantsApiService.insertEntry(newEntry)
        })
        .then(res => {
          const items = this.state.items.map(itm => {
            return {
              name: itm.name,
              description: itm.description,
              entry_id: res.id
            }
          });
          items.forEach(itm => RestaurantsApiService.insertItem(itm))
        })
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })

    }

    handleChange = e => {
      const targetItemId = e.target.closest('li').id;
      const targetItemIndex = parseInt(targetItemId.charAt(targetItemId.length - 1))
      const newItems = this.state.items.slice()
      if (e.target.name === 'item_name') {
        newItems[targetItemIndex].name = e.target.value
        this.setState({
            items: newItems
        })
      }
      if(e.target.name === 'item_description') {
          newItems[targetItemIndex].description = e.target.value
          this.setState({
              items: newItems
          })
      }
    }

    renderItems() {
      return this.state.items.map((itm, index) => {
        return (
          <li key={index} id={'Item-' + index}>
          <label htmlFor="item_name">Name of item:</label>
          <input type="text" name="item_name" onChange={this.handleChange}></input>
          <button type="button">Add photo</button>
          <label htmlFor="item_description">Describe it:</label>
          <textarea name="item_description" placeholder="Enter description" onChange={this.handleChange}></textarea>
          </li>
        )
      })
    }

    createItem = (e) => {
      let newItem = { name: '', photo: '', description: '' };
      this.setState({ 
          items: [...this.state.items, newItem]
      })
    }

    render() {
      const { error } = this.state
        return (
            <div className="move_item">
              <div className="error">{error ? <p>Something went wrong, try again</p> : ''}</div>
                <form id="move_item" onSubmit={this.moveToVisited}>
                  <div className="form_section">
                    <label htmlFor="rating">Rate this restaurant:</label>
                    <input type="radio" value="1" name="rating"></input>
                    <label htmlFor='rating'>1</label>
                    <input type="radio" value="2" name="rating"></input>
                    <label htmlFor='rating'>2</label>
                    <input type="radio" value="3" name="rating"></input>
                    <label htmlFor='rating'>3</label>
                    <input type="radio" value="4" name="rating"></input>
                    <label htmlFor='rating'>4</label>
                    <input type="radio" value="5" name="rating"></input>
                    <label htmlFor='rating'>5</label>
                  </div>
                  <div className="form_section">
                    <label htmlFor="visited_date">Visited on:</label>
                    <input type="date" name="visited_date"></input>
                  </div>
                  <div className="form_section">
                    <label htmlFor="items_ordered">What I ate:</label>
                  <ul id="items_ordered">
                    {this.renderItems()}
                  </ul>
                  <button type="button" onClick={this.createItem}>{!this.state.items.length ? 'Add an item' : 'Add another item'}</button>
                  </div>
                  <div className="form_section">
                    <label htmlFor="notes">Describe this experience:</label>
                    <textarea name="notes" placeholder="Enter details"></textarea>
                  </div>
                  <div className="form_section">
                    <button type="button" id="cancel_form">Cancel</button>
                    <button type="submit">Done</button>
                  </div>
                </form>
            </div>
        )
    }
}