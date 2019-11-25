import React from 'react';
import ReactDOM from 'react-dom';
import VisitedItem from './VisitedItem';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const restaurant = { rating: 5, restaurant: { name: 'test', city: 'test', state: 'TT' } }
  ReactDOM.render(<BrowserRouter><VisitedItem restaurant={restaurant}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});