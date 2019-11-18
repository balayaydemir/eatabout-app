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
            <div class="form_section js_visited">
                <label for="rating">Rate this restaurant:</label>
                <input type="radio" value="1" name="rating"></input>
                <label for="rating">1</label>
                <input type="radio" value="2" name="rating"></input>
                <label for="rating">2</label>
                <input type="radio" value="3" name="rating"></input>
                <label for="rating">3</label>
                <input type="radio" value="4" name="rating"></input>
                <label for="rating">4</label>                        
                <input type="radio" value="5" name="rating"></input>
                <label for="rating">5</label>
            </div>
            <div class="form_section js_visited">
                <label for="visited_date">Visited on:</label>
                <input type="date" name="visited_date"></input>
            </div>
            <div class="form_section js_visited">
                <label for="items_ordered">What I ate:</label>
            <div id="items_ordered">
                <label for="item_name">Name of item:</label>
                <input type="text" name="item_name"></input>
                <button type="button">Add photo</button>
                <label for="item_description">Describe it:</label>
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
                    <div class="form_section">
                        <input type="radio" value="wishlist" id="check_wishlist" name="entry_type" checked={!this.state.visited} onChange={this.toggleVisited}></input>
                        <label for="check_wishlist">Wishlist</label>
                        <input type="radio" value="visited" id="check_visited" name="entry_type" checked={this.state.visited} onChange={this.toggleVisited}></input>
                        <label for="check_visited">Visited</label>
                    </div>
                    <div class="form_section">
                        <label for="restaurant_name">Name of restaurant:</label>
                        <input type="text" name="restaurant_name"></input>
                    </div>
                    <div class="form_section">
                        <label for="restaurant_url">Website:</label>
                        <input type="url" name="restaurant_url" placeholder="http://"></input>
                     </div>
                    <div class="form_section">
                        <label for="cuisine">Type of cuisine:</label>
                        <select name="cuisine">
                            <option>Mediterranean</option>
                            <option>Japanese</option>
                            <option>BBQ</option>
                            <option>Italian</option>
                            <option>etc...</option>
                        </select>
                    </div>
                    <div class="form_section">
                        <label for="restaurant_city">City:</label>
                        <input type="text" name="restaurant_city"></input>
                        <label for="restaurant_state">State:</label>
                        <select name="restaurant_state">
                            <option>CA</option>
                            <option>NY</option>
                            <option>etc...</option>
                        </select>
                    </div>
                    <div class="form_section">
                        <label for="notes">Description:</label>
                        <textarea name="notes" placeholder="Enter details"></textarea>
                    </div>
                    {this.state.visited ? this.renderVisitedForm() : ''}
                    <div class="form_section">
                        <button type="button" id="cancel_form">Cancel</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
           </section> 
        )
    }
}