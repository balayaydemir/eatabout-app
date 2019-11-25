import React from 'react';
import ReactDOM from 'react-dom';
import EditEntryForm from './EditEntryForm';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><EditEntryForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});