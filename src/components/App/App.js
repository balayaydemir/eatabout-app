import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import AddNewRestaurant from '../../routes/AddNewRestaurant/AddNewRestaurant';
import StatsPage from '../../routes/StatsPage/StatsPage';
import RestaurantListPage from '../../routes/RestaurantListPage/RestaurantListPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              path={'/login'}
              component={LoginPage}
            />
            <Route 
              path={'/addrestaurant'}
              component={AddNewRestaurant}
            />
            <Route 
              path={'/mystats'}
              component={StatsPage}
            />
            <Route 
              path={'/myrestaurants'}
              component={RestaurantListPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
