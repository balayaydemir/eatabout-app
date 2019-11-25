import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantEntries from './RestaurantEntries';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const entry = { date: '2019-11-24T08:00:00.000Z' }
  const renderDate = function renderDate(date) {
    const year = date.slice(0, 4)
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)

    return `${month}/${day}/${year}`
  }
  ReactDOM.render(<BrowserRouter><RestaurantEntries entry={entry} renderDate={renderDate}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});