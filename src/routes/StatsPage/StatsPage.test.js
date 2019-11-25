import React from 'react';
import ReactDOM from 'react-dom';
import StatsPage from './StatsPage';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><StatsPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});