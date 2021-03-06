import React, { Component } from 'react';
import RestaurantsApiService from '../../services/restaurant-api-service';
import swal from 'sweetalert';
import ItemsEaten from '../../components/ItemsEaten/ItemsEaten';
import { storage } from '../../firebase/index';
import './MoveToVisitedForm.css';
import StarRating from '../Rating/StarRating';





class MoveToVisitedForm extends Component {

  state = {
    error: null,
    items: [],
    rating: 1
  }

  moveToVisited = e => {
    e.preventDefault();
    const { restaurant } = this.props
    const { visited_date, notes } = e.target
    const body = {
      visited: true,
      rating: this.state.rating,
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
        swal({
          title: 'Done!',
          text: 'Restaurant updated successfully',
          icon: 'success',
          timer: 2000,
          button: false
        })
        this.props.onMove()
      })
      .catch(error => {
        console.error(error)
        this.setState({ error })
        swal({
          title: 'Uh oh!',
          text: error.error,
          icon: 'error',
          timer: 2000,
          button: true
        })
      })

  }

  ratingChange = (rating) => {
    this.setState({
      rating: rating
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
    if (e.target.name === 'item_description') {
      newItems[targetItemIndex].description = e.target.value
      this.setState({
        items: newItems
      })
    }
    if (e.target.name === 'photo_upload') {
      const file = e.target.files[0]
      const uploadTask = storage.ref().child(`images/${file.name}`)
      uploadTask.put(file)
          .then(snapshot => {
              swal({
                  title: 'Done!',
                  text: 'Photo uploaded successfully',
                  icon: 'success',
                  timer: 1500,
                  button: false
              })
              return snapshot.metadata.fullPath
          })
          .then(res => {
              const downloadTask = storage.ref().child(res)
              downloadTask.getDownloadURL()
                  .then(url => {
                      newItems[targetItemIndex].photo = url
                      this.setState({
                          items: newItems
                      })
                  })
          })
          .catch(error => {
              swal({
                  title: 'Uh oh!',
                  text: error,
                  icon: 'error',
                  timer: 4000,
                  button: true
              })
          })
    }
  }


  deleteItem = e => {
    const targetItemId = e.target.closest('li').id;
    const targetItemIndex = parseInt(targetItemId.charAt(targetItemId.length - 1))
    let newItems = this.state.items.filter(itm => this.state.items.indexOf(itm) !== targetItemIndex)
    this.setState({
      items: newItems
    })
  }



  renderItems() {
    return this.state.items.map((itm, index) => {
      return (
        <ItemsEaten key={index} index={index} handleChange={this.handleChange} deleteItem={this.deleteItem} />
      )
    })
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
    this.props.toggleVisited()
  }

  render() {
    const { error } = this.state
    return (
      <div id="move_item_container">
        <div className="error">{error ? <p>Something went wrong, try again</p> : ''}</div>
        <form id="move_item" onSubmit={this.moveToVisited}>
          <div id="rating">
            <label htmlFor="rating">Rate this restaurant: </label>
            <StarRating totalStars={5} ratingChange={this.ratingChange}/>
          </div>
          <div className="form_section">
            <label htmlFor="visited_date">Visited on: </label>
            <input type="date" name="visited_date" required></input>
          </div>
          <div id="eaten">
            <label htmlFor="items_ordered">What I ate:</label>
            {this.state.items.length ? <div id="required">* Required field</div> : ''}
            <ul id="items_ordered">
              {this.renderItems()}
            </ul>
            <button type="button" className="add_another" onClick={this.createItem}>{!this.state.items.length ? 'Add an item' : 'Add another item'}</button>
          </div>
          <div className="form_section describe">
            <label htmlFor="notes">Describe the experience:</label>
            <textarea name="notes" placeholder="Enter details"></textarea>
          </div>
          <div className="form_section">
            <button type="button" className="cancel_form" onClick={this.handleCancel}>Cancel</button>
            <button type="submit" className="submit">Done</button>
          </div>
        </form>
      </div>
    )
  }
}

export default MoveToVisitedForm