import React, { Component } from 'react';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import VisitedItem from '../../components/VisitedItem/VisitedItem';
import { Link } from 'react-router-dom';
import RestaurantsApiService from '../../services/restaurant-api-service';

export default class RestaurantListPage extends Component {
    state = { 
        error: null,
        restaurantsList: [],
        cuisines:[],
        wishlistFilter: false,
        visitedFilter: false,
        filterCityWishlist: null,
        filterCuisineWishlist: null,
        filterCityVisited: null, 
        filterCuisineVisited: null, 
        filterRating: null
    }

    componentDidMount() {
        this.setState({ error: null })
        RestaurantsApiService.getUserRestaurants()
            .then(restaurants => {
                this.setState({
                    restaurantsList: restaurants
                })
            })
            .then(() => {
                RestaurantsApiService.getAllCuisines()
                    .then(cuisines => {
                        this.setState({ cuisines })
                    })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    onDelete = (id) => {
        RestaurantsApiService.deleteUserRestaurant(id)
            let newRestaurants = this.state.restaurantsList.filter(restaurant => restaurant.id !== id)
            this.setState({
                restaurantsList: newRestaurants
            })
    }

    handleCityChange = e => {
        if (e.target.closest('div').className === 'wishlist_filter') {
            this.setState({
                filterCityWishlist: e.target.value
            })
        }
        if (e.target.closest('div').className === 'visited_filter') {
            this.setState({
                filterCityVisited: e.target.value
            })
        }
    }

    handleCuisineChange = e => {
        if (e.target.closest('div').className === 'wishlist_filter') {
            this.setState({
                filterCuisineWishlist: e.target.value
            })
        }
        if (e.target.closest('div').className === 'visited_filter') {
            this.setState({
                filterCuisineVisited: e.target.value
            })
        }
    }

    handleRatingChange = e => {
        const ratingFilter = parseInt(e.target.value.charAt(0))
        this.setState({
            filterRating: ratingFilter
        })
    }

    renderFilterWishlist() {
        return (
            <div className="wishlist_filter">
                <label htmlFor="city_filter">Filter by city: </label>
                <input type="test" id="city_filter" value={this.state.cityFilter} onChange={this.handleCityChange}></input>
                <label htmlFor="cuisine_filter">Filter by cuisine: </label>
                <select id="cuisine_filter" onChange={this.handleCuisineChange}>
                    {this.state.cuisines.map(cuisine => {
                        return <option key={cuisine.id}>{cuisine.cuisine_name}</option>
                    })}
                </select>
            </div>
        )
    }

    renderFilterVisited() {
        return (
            <div className="visited_filter">
                <label htmlFor="city_filter">Filter by city: </label>
                <input type="test" id="city_filter" value={this.state.cityFilter} onChange={this.handleCityChange}></input>
                <label htmlFor="cuisine_filter">Filter by cuisine: </label>
                <select id="cuisine_filter" onChange={this.handleCuisineChange}>
                    {this.state.cuisines.map(cuisine => {
                        return <option key={cuisine.id}>{cuisine.cuisine_name}</option>
                    })}
                </select>
                <label htmlFor="rating_filter">Filter by rating: </label>
                <select id="rating_filter" onChange={this.handleRatingChange}>
                    <option>5 stars</option>
                    <option>4 stars and up</option>
                    <option>3 stars and up</option>
                    <option>2 stars and up</option>
                    <option>1 star and up</option>
                </select>
            </div>
        )
    }

    toggleWishListFilter = () => {
        this.setState({
            wishlistFilter: !this.state.wishlistFilter,
            filterCityWishlist: null,
            filterCuisineWishlist: null,
        })
    }

    toggleVisitedFilter = () => {
        this.setState({
            visitedFilter: !this.state.visitedFilter,
            filterCityVisited: null, 
            filterCuisineVisited: null, 
            filterRating: null
        })
    }

    renderWishlistRestaurants() {
        let restaurants = this.state.restaurantsList.filter(restaurant => restaurant.visited === false)
        if (this.state.filterCityWishlist) {
            const filter = this.state.filterCityWishlist.toLowerCase()
            restaurants = restaurants.filter(itm => itm.restaurant.city.toLowerCase().includes(filter))
        }
        if (this.state.filterCuisineWishlist) {
            const filter = this.state.filterCuisineWishlist.toLowerCase()
            restaurants = restaurants.filter(itm => itm.restaurant.cuisine_name.toLowerCase() === filter)
        }
        return restaurants.map(restaurant => <WishlistItem key={restaurant.id} restaurant={restaurant} onDelete={this.onDelete}/>)
    }

    renderVisitedRestaurants() {
        let restaurants = this.state.restaurantsList.filter(restaurant => restaurant.visited === true)
        if (this.state.filterCityVisited) {
            const filter = this.state.filterCityVisited.toLowerCase()
            restaurants = restaurants.filter(itm => itm.restaurant.city.toLowerCase().includes(filter))
        }
        if (this.state.filterCuisineVisited) {
            const filter = this.state.filterCuisineVisited.toLowerCase()
            restaurants = restaurants.filter(itm => itm.restaurant.cuisine_name.toLowerCase() === filter)
        }
        if (this.state.filterRating) {
            const filter = this.state.filterRating
            restaurants = restaurants.filter(itm => itm.rating >= filter)
        }
        return restaurants.map(restaurant => <VisitedItem key={restaurant.id} restaurant={restaurant} onDelete={this.onDelete}/>)
    }

    render() {
        const { error } = this.state
        return (
            <>
            <header>
                <h1>My Restaurants</h1>
            </header>
            <section className="lists">
                <Link to='/addrestaurant'><button type="button">+ Add Restaurant</button></Link>
                <div className="wishlist">
                    <h3>Wishlist</h3>
        <button type="button" onClick={this.toggleWishListFilter}>{this.state.wishlistFilter ? 'Filter -' : 'Filter +'}</button>
                    {this.state.wishlistFilter ? this.renderFilterWishlist() : ''}
                    <ul>
                        {error ? <p className='red'>There was an error, try again</p> : this.renderWishlistRestaurants()}
                    </ul>
                </div>
                <div className="visited">
                    <h3>Visited</h3>
        <button type="button" onClick={this.toggleVisitedFilter}>{this.state.visitedFilter ? 'Filter -' : 'Filter +'}</button>
                    {this.state.visitedFilter ? this.renderFilterVisited() : ''}
                    <ul>
                        {error ? <p className='red'>There was an error, try again</p> : this.renderVisitedRestaurants()}
                    </ul>
                </div>
             </section>
            </>
        )
    }
}