import React from 'react';
import ReactDOM from 'react-dom';
import AddNewRestaurant from './AddNewRestaurant';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddNewRestaurant history={history}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});