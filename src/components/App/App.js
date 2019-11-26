import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import AddNewRestaurant from '../../routes/AddNewRestaurant/AddNewRestaurant';
import StatsPage from '../../routes/StatsPage/StatsPage';
import RestaurantListPage from '../../routes/RestaurantListPage/RestaurantListPage';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import Demo from '../../routes/Demo/Demo';
import './App.css';

const EVENT_KEY_DOWN = 'keydown'
const EVENT_KEY_UP = 'keyup'

class App extends Component {
  state = {
    token: TokenService.getAuthToken(),
    userName: AuthApiService.getUserName(),
    isCapsLockActive: false
  }

  componentDidMount() {
    document.addEventListener(EVENT_KEY_DOWN, this.wasCapsLockActivated)
    document.addEventListener(EVENT_KEY_UP, this.wasCapsLockDeactivated)
}

wasCapsLockActivated = event => {
    if (
      event.getModifierState &&
      event.getModifierState('CapsLock') &&
      this.state.isCapsLockActive === false
    ) {
      this.setState({ isCapsLockActive: true })
    }
  }

wasCapsLockDeactivated = event => {
    if (
      event.getModifierState &&
      !event.getModifierState('CapsLock') &&
      this.state.isCapsLockActive === true
    ) {
      this.setState({ isCapsLockActive: false })
    }
  }

  handleGetToken = (authToken) => {
    this.setState({ token: authToken })
  }

  handleGetUserName = (user_name) => {
    return AuthApiService.setUserName(user_name)
      .then(res => {
        this.setState({
          userName: res
        })
      })
    
  }

  handleClearUserName = (x) => {
    this.setState({
      userName: x
    })
  }


  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header handleGetToken={this.handleGetToken} token={this.state.token} handleClearUserName={this.handleClearUserName}/>
        </header>
        <main className='App__main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              render={(routeProps) => <LandingPage {...routeProps} capsLock={this.state.isCapsLockActive}/>}
            />
            <Route 
              path={'/login'}
              render={(routeProps) => <LoginPage {...routeProps} handleGetToken={this.handleGetToken} handleGetUserName={this.handleGetUserName} capsLock={this.state.isCapsLockActive}/>}
            />
            <Route 
              path={'/demo'}
              render={(routeProps) => <Demo {...routeProps} handleGetToken={this.handleGetToken} handleGetUserName={this.handleGetUserName} capsLock={this.state.isCapsLockActive}/>}
            />
            <Route 
              path={'/addrestaurant'}
              component={AddNewRestaurant}
            />
            <Route 
              path={'/mystats'}
              render={() => <StatsPage userName={this.state.userName}/>}
            />
            <Route 
              path={'/myrestaurants'}
              render={() => <RestaurantListPage userName={this.state.userName}/>}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;


// render={() => <LoginPage handleGetToken={this.handleGetToken}/>}