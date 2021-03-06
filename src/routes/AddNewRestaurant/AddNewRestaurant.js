import React, { Component } from 'react';
import RestaurantsApiService from '../../services/restaurant-api-service';
import swal from 'sweetalert';
import ItemsEaten from '../../components/ItemsEaten/ItemsEaten';
import './AddNewRestaurant.css';
import StarRating from '../../components/Rating/StarRating';
import { storage } from '../../firebase/index';



export default class AddNewRestaurant extends Component {
    state = {
        visited: false,
        cuisines: [],
        items: [],
        rating: null,
        error: null
    }


    toggleVisited = () => {
        this.setState({
            visited: !this.state.visited
        })
    }

    ratingChange = (rating) => {
         this.setState({
             rating: rating
         })
     }

    componentDidMount() {
        this.setState({ error: null })
        RestaurantsApiService.getAllCuisines()
            .then(cuisines => {
                this.setState({ cuisines })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            });

    }

    handleSubmit = async e => {
        e.preventDefault()
        const { restaurant_name, restaurant_url, cuisine, restaurant_state, restaurant_city, notes, visited_date } = e.target
        const cuisineId = this.state.cuisines.find(itm => itm.cuisine_name === cuisine.value).id
        const newRestaurantBody = {
            name: restaurant_name.value,
            website: restaurant_url.value,
            cuisine: cuisineId,
            city: restaurant_city.value,
            state: restaurant_state.value
        }
        try {
            let res = await RestaurantsApiService.addNewRestaurant(newRestaurantBody);
            if (!this.state.visited) {
                const newUserRestaurantBody = {
                    visited: this.state.visited,
                    restaurant_id: res.id
                }
                res = await RestaurantsApiService.addNewUserRestaurant(newUserRestaurantBody)
            } else {
                const newUserRestaurantBody = {
                    visited: this.state.visited,
                    restaurant_id: res.id,
                    rating: this.state.rating,
                    description: notes.value,
                    date_visited: visited_date.value
                }
                res = await RestaurantsApiService.addNewUserRestaurant(newUserRestaurantBody)
            }
            if (!this.state.visited) {
                swal({
                    title: 'Done!',
                    text: 'Wishlist restaurant has been added',
                    icon: 'success',
                    timer: 2000,
                    button: false
                })
                this.props.history.goBack();
                return
            }
            const newEntry = {
                date: res.date_visited,
                user_restaurant_id: res.id,
                user_id: res.user_id
            }
            res = await RestaurantsApiService.insertEntry(newEntry)
            const items = this.state.items.map(itm => {
                return {
                    name: itm.name,
                    description: itm.description,
                    entry_id: res.id,
                    image: itm.photo
                }
            });
            items.forEach(itm => RestaurantsApiService.insertItem(itm));
            swal({
                title: 'Done!',
                text: 'Visited restaurant has been added',
                icon: 'success',
                timer: 2000,
                button: false
            })
            this.props.history.goBack();
        }
        catch (error) {
            console.error(error)
            this.setState({ error })
            swal({
                title: 'Uh oh!',
                text: error.error,
                icon: 'error',
                timer: 4000,
                button: true
            })
        }
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

    renderVisitedForm(rating) {
        return (
            <>
                <div id="rating" className="form_section js_visited">
                    <label htmlFor="rating">Rate this restaurant: </label>
                    <StarRating totalStars={5} ratingChange={this.ratingChange}/>
                </div>
                <div className="form_section">
                    <label htmlFor="notes">Description: </label>
                    <textarea name="notes" placeholder="Enter details"></textarea>
                </div>
                <div className="form_section js_visited">
                    <label htmlFor="visited_date">Visited on: </label>
                    <input type="date" name="visited_date" required></input>
                </div>
            </>
        )
    }
    render() {
        const { error, rating } = this.state
        return (
            <section id="addnew">
                <header><h2>New Restaurant</h2></header>
                <div className="error">{error ? <p>Something went wrong, try again</p> : ''}</div>
                <form id="add_restaurant" onSubmit={this.handleSubmit}>
                    <div className="radio-toolbar">
                        <input type="radio" value="wishlist" id="check_wishlist" name="entry_type" checked={!this.state.visited} onChange={this.toggleVisited}></input>
                        <label htmlFor="check_wishlist">Wishlist</label>
                        <input type="radio" value="visited" id="check_visited" name="entry_type" checked={this.state.visited} onChange={this.toggleVisited}></input>
                        <label htmlFor="check_visited">Visited</label>
                    </div>
                    <div className="form_section">
                        <label htmlFor="restaurant_name">Name of restaurant: </label>
                        <input type="text" name="restaurant_name" required></input>
                    </div>
                    <div className="form_section">
                        <label htmlFor="restaurant_url">Website: </label>
                        <input type="url" name="restaurant_url" placeholder="http://" required></input>
                    </div>
                    <div className="form_section">
                        <label htmlFor="cuisine">Type of cuisine: </label>
                        <select name="cuisine" id="cuisine" required>
                            {this.state.cuisines.map(cuisine => {
                                return (
                                    <option key={cuisine.id}>{cuisine.cuisine_name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div id="city_state">
                        <label htmlFor="restaurant_city">City: </label>
                        <input type="text" name="restaurant_city" required></input>
                        <label htmlFor="restaurant_state">State: </label>
                        <input type="text" name="restaurant_state" maxLength="2" placeholder="ex. CA or NY" required></input>
                    </div>
                    {this.state.visited ? this.renderVisitedForm(rating) : ''}
                    {this.state.visited ?
                        <div id="visited">
                            <label htmlFor="items_ordered">What I ate: </label>
                            {this.state.items.length ? <div id="required">* Required field</div> : ''}
                            <ul id="items_ordered">
                                {this.renderItems()}
                            </ul>
                            <button type="button" className="add_another" onClick={this.createItem}>{!this.state.items.length ? 'Add an item' : 'Add another item'}</button>
                        </div>
                        : ''}
                    <div className="form_section">
                        <button type="button" className="cancel_form" onClick={this.props.history.goBack}>Cancel</button>
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form> 
            </section>
        )
    }
}