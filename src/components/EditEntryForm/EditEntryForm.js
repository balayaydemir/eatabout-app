import React, { Component } from 'react';
import RestaurantsApiService from '../../services/restaurant-api-service';

export default class EditEntryForm extends Component {
    state = {
      items: [],
      error: null
    }

    renderItems() {
      return this.state.items.map((itm, index) => {
        return (
          <li key={index} id={'Item-' + index}>
            <label htmlFor="item_name">Name of item:</label>
            <input type="text" name="item_name" onChange={this.handleChange}></input>
            <label htmlFor="photo_upload">Add a photo: </label>
            <input type="file" id="photo_upload" name="photo_upload" onChange={this.handleChange} ></input>
            <label htmlFor="item_description">Describe it:</label>
            <textarea name="item_description" placeholder="Enter description" onChange={this.handleChange}></textarea>
          </li>
        )
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
      if (e.target.name === 'photo_upload') {
        const file = e.target.files[0]
        
        RestaurantsApiService.uploadPhoto(file)
          .then(res => {
              newItems[targetItemIndex].photo = res
              this.setState({
                  items: newItems
              })
          })
          .catch(err => {
              console.error(err)
              this.setState({ error: err })
          })
      }
    }


    createItem = (e) => {
      let newItem = { name: '', photo: '', description: '' };
      this.setState({ 
          items: [...this.state.items, newItem]
      })
    }

    handleCancel = () => {
      this.setState({
        items: []
      })
      this.props.toggleEdit()
    }

    handleSubmit = e => {
      e.preventDefault();
      const { restaurant } = this.props;
      let { rating, visited_date, notes } = e.target
      const body = {
        visited: restaurant.visited,
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
              entry_id: res.id,
              image: itm.photo
            }
          });
          items.forEach(itm => RestaurantsApiService.insertItem(itm))
          window.location.reload(false)
        })
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
    }

    render() {
        return (
            <div className="edit_item">
                <form id="edit_item" onSubmit={this.handleSubmit}>
                  <div className="form_section">
                    <label htmlFor="rating">Change rating:</label>
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
                    <label htmlFor="visited_date">New visit date:</label>
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
                    <button type="button" id="cancel_form" onClick={this.handleCancel}>Cancel</button>
                    <button type="submit">Done</button>
                  </div>
                </form>
            </div>
        )
    }
}