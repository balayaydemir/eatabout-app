import React from 'react';
import ReactDOM from 'react-dom';
import MoveToVisitedForm from './MoveToVisitedForm';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MoveToVisitedForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});