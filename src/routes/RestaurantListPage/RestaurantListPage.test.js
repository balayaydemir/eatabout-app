import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantListPage from './RestaurantListPage';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RestaurantListPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});