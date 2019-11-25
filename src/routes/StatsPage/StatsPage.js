import React, { Component } from 'react';
import CuisineBreakdown from '../../components/CuisineBreakdown/CuisineBreakdown';
import './StatsPage.css';


export default class StatsPage extends Component {
    render() {
        return (
            <>
            <header>
                <h1>{this.props.userName}'s Stats</h1>
            </header>
            <section className="cuisine_stats">
                <h3 id="report_title">Cuisine Breakdown</h3>
                <p id="report_desc">These are the types of cuisines that you have tried so far - can you think of any more you'd like to add?</p>
                <CuisineBreakdown />
            </section>
            </>
        )
    }
}