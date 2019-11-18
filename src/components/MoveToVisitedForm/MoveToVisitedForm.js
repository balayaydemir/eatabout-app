import React, { Component } from 'react';

export default class MoveToVisitedForm extends Component {
    render() {
        return (
            <div className="move_item">
                <form id="move_item">
                  <div className="form_section">
                    <label htmlFor="rating">Rate this restaurant:</label>
                    <input type="radio" value="1" name="rating"></input>
                    <label htmlFor='rating'>1</label>
                    <input type="radio" value="2" name="rating"></input>
                    <label htmlFor='rating'>2</label>
                    <input type="radio" value="3" name="rating"></input>
                    <label htmlFor='rating'>3</label>
                    <input type="radio" value="4" name="rating"></input>
                    <label htmlFor='rating'>4</label>
                    <input type="radio" value="5" name="rating"></input>
                    <label htmlFor='rating'>5</label>
                  </div>
                  <div className="form_section">
                    <label htmlFor="visited_date">Visited on:</label>
                    <input type="date" name="visited_date"></input>
                  </div>
                  <div className="form_section">
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
                  <div className="form_section">
                    <label htmlFor="notes">Describe your experience:</label>
                    <textarea name="notes" placeholder="Enter details"></textarea>
                  </div>
                  <div className="form_section">
                    <button type="button" id="cancel_form">Cancel</button>
                    <button type="submit">Done</button>
                  </div>
                </form>
            </div>
        )
    }
}