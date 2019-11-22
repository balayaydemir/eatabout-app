import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import AddNewRestaurant from '../../routes/AddNewRestaurant/AddNewRestaurant';
import StatsPage from '../../routes/StatsPage/StatsPage';
import RestaurantListPage from '../../routes/RestaurantListPage/RestaurantListPage';
import TokenService from '../../services/token-service';


class App extends Component {
  state = {
    token: TokenService.getAuthToken()
  }

  handleGetToken = (authToken) => {
    this.setState({ token: authToken })
  }


  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header handleGetToken={this.handleGetToken} token={this.state.token}/>
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
              render={(routeProps) => <LoginPage {...routeProps} handleGetToken={this.handleGetToken}/>}
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


// render={() => <LoginPage handleGetToken={this.handleGetToken}/>}