import React, { Component } from 'react';


export default class AddNewRestaurant extends Component {
    state = {
        visited: false
    }

    toggleVisited = () => {
        this.setState({
            visited: !this.state.visited
        })
    }
    renderVisitedForm() {
        return (
            <>
            <div className="form_section js_visited">
                <label htmlFor="rating">Rate this restaurant:</label>
                <input type="radio" value="1" name="rating"></input>
                <label htmlFor="rating">1</label>
                <input type="radio" value="2" name="rating"></input>
                <label htmlFor="rating">2</label>
                <input type="radio" value="3" name="rating"></input>
                <label htmlFor="rating">3</label>
                <input type="radio" value="4" name="rating"></input>
                <label htmlFor="rating">4</label>                        
                <input type="radio" value="5" name="rating"></input>
                <label htmlFor="rating">5</label>
            </div>
            <div className="form_section js_visited">
                <label htmlFor="visited_date">Visited on:</label>
                <input type="date" name="visited_date"></input>
            </div>
            <div className="form_section js_visited">
                <label htmlFor="items_ordered">What I ate:</label>
            <div id="items_ordered">
                <label htmlFor="item_name">Name of item:</label>
                <input type="text" name="item_name"></input>
                <button type="button">Add photo</button>
                <label htmlFor="item_description">Describe it:</label>
                <textarea name="item_description" placeholder="Enter description"></textarea>
                <button type="submit">Save</button>
            </div>
                <button type="button">Add another item</button>
            </div>
            </>
        )
    }
    render() {
        return (
           <section>
               <header>New Restaurant</header>
               <form id="add_restaurant">
                    <div className="form_section">
                        <input type="radio" value="wishlist" id="check_wishlist" name="entry_type" checked={!this.state.visited} onChange={this.toggleVisited}></input>
                        <label htmlFor="check_wishlist">Wishlist</label>
                        <input type="radio" value="visited" id="check_visited" name="entry_type" checked={this.state.visited} onChange={this.toggleVisited}></input>
                        <label htmlFor="check_visited">Visited</label>
                    </div>
                    <div className="form_section">
                        <label htmlFor="restaurant_name">Name of restaurant:</label>
                        <input type="text" name="restaurant_name"></input>
                    </div>
                    <div className="form_section">
                        <label htmlFor="restaurant_url">Website:</label>
                        <input type="url" name="restaurant_url" placeholder="http://"></input>
                     </div>
                    <div className="form_section">
                        <label htmlFor="cuisine">Type of cuisine:</label>
                        <select name="cuisine">
                            <option>Mediterranean</option>
                            <option>Japanese</option>
                            <option>BBQ</option>
                            <option>Italian</option>
                            <option>etc...</option>
                        </select>
                    </div>
                    <div className="form_section">
                        <label htmlFor="restaurant_city">City:</label>
                        <input type="text" name="restaurant_city"></input>
                        <label htmlFor="restaurant_state">State:</label>
                        <select name="restaurant_state">
                            <option>CA</option>
                            <option>NY</option>
                            <option>etc...</option>
                        </select>
                    </div>
                    <div className="form_section">
                        <label htmlFor="notes">Description:</label>
                        <textarea name="notes" placeholder="Enter details"></textarea>
                    </div>
                    {this.state.visited ? this.renderVisitedForm() : ''}
                    <div className="form_section">
                        <button type="button" id="cancel_form" onClick={this.props.history.goBack}>Cancel</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
           </section> 
        )
    }
}