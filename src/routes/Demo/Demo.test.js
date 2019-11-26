import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Demo/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});