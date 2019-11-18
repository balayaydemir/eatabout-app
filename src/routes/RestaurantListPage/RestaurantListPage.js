import React, { Component } from 'react';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import VisitedItem from '../../components/VisitedItem/VisitedItem';
import { Link } from 'react-router-dom';

export default class RestaurantListPage extends Component {
    render() {
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
                        <WishlistItem />
                    </ul>
                </div>
                <div className="visited">
                    <h3>Visited</h3>
                    <button type="button">Filter +</button>
                    <ul>
                        <VisitedItem />
                    </ul>
                </div>
             </section>
            </>
        )
    }
}