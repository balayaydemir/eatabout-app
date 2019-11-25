import React from 'react';
import ReactDOM from 'react-dom';
import WishlistItem from './WishlistItem';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const restaurant = { restaurant: { name: 'test', city: 'test', state: 'TT' } }
  ReactDOM.render(<BrowserRouter><WishlistItem restaurant={restaurant}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});