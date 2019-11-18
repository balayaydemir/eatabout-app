import React, { Component } from 'react';
import CuisineBreakdown from '../../components/CuisineBreakdown/CuisineBreakdown';
import FavoriteRestaurants from '../../components/FavoriteRestaurants/FavoriteRestaurants';

export default class StatsPage extends Component {
    render() {
        return (
            <>
            <header>
                <h1>My Stats</h1>
            </header>
            <section class="cuisine_stats">
                <h3>Cuisine Breakdown</h3>
                <CuisineBreakdown />
            </section>
            <section class="favorite_restaurants">
                <h3>Favorite Restaurants</h3>
                <FavoriteRestaurants />
            </section>
            </>
        )
    }
}