import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Loading /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});