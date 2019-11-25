import React from 'react';
import ReactDOM from 'react-dom';
import ItemsEaten from './ItemsEaten';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ItemsEaten /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});