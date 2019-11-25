import React, { Component } from 'react';
import CuisineBreakdown from '../../components/CuisineBreakdown/CuisineBreakdown';


export default class StatsPage extends Component {
    render() {
        return (
            <>
            <header>
                <h1>{this.props.userName}'s Stats</h1>
            </header>
            <section className="cuisine_stats">
                <h3>Cuisine Breakdown</h3>
                <CuisineBreakdown />
            </section>
            </>
        )
    }
}