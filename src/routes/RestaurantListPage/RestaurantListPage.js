import React, { Component } from 'react';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import VisitedItem from '../../components/VisitedItem/VisitedItem';
import { Link } from 'react-router-dom';
import RestaurantsApiService from '../../services/restaurant-api-service';

export default class RestaurantListPage extends Component {
    state = { 
        error: null,
        restaurantsList: []
    }

    componentDidMount() {
        this.setState({ error: null })
        RestaurantsApiService.getUserRestaurants()
            .then(restaurants => {
                this.setState({
                    restaurantsList: restaurants
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    renderWishlistRestaurants() {
        const restaurants = this.state.restaurantsList.filter(restaurant => restaurant.visited === false)
        return restaurants.map(restaurant => <WishlistItem key={restaurant.id} restaurant={restaurant}/>)
    }

    renderVisitedRestaurants() {
        const restaurants = this.state.restaurantsList.filter(restaurant => restaurant.visited === true)
        return restaurants.map(restaurant => <VisitedItem key={restaurant.id} restaurant={restaurant}/>)
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
                    <button type="button">Filter +</button>
                    <ul>
                        {error ? <p className='red'>There was an error, try again</p> : this.renderWishlistRestaurants()}
                    </ul>
                </div>
                <div className="visited">
                    <h3>Visited</h3>
                    <button type="button">Filter +</button>
                    <ul>
                        {error ? <p className='red'>There was an error, try again</p> : this.renderVisitedRestaurants()}
                    </ul>
                </div>
             </section>
            </>
        )
    }
}