import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'; 
import HamburgerMenu from 'react-hamburger-menu';
import './Header.css'


export default class Header extends Component {

    state = {
        open: false
    }

    onOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }


    handleLogout = () => {
        this.props.handleGetToken(null);
        this.props.handleClearUserName(null)
        AuthApiService.clearUserName();
        TokenService.clearAuthToken();
    }


    renderLoginLink() {
        return (
            <ul className='Header__not-logged-in' onClick={this.onOpen}>
                <Link
                  to='/login'>
                  <li>Log In</li>
                </Link>
                <Link
                  to='/demo'>
                  <li>Demo</li>
                </Link>
            </ul>
        )
    }
    renderLogoutLink() {
        return (
            <ul className='Header__logged-in' onClick={this.onOpen}>
                <Link
                    to='/myrestaurants'>
                    <li>My Restaurants</li> 
                </Link>
                <Link 
                    to='/mystats'>
                    <li>My Stats</li>
                </Link>
                <Link
                    onClick={this.handleLogout}
                    to='/'>
                    <li>Logout</li>
                </Link>
            </ul>
        )
    }

    
    render() {
        const openClass = this.state.open ? 'Header__open' : 'Header__closed'
        return (
            <nav className={'Header ' + openClass}>
                <h1>
                    <Link to='/'>
                        Eatabout Logo
                    </Link>
                </h1>
                <div id="hamburger">
                <HamburgerMenu 
                    isOpen={this.state.open}
                    menuClicked={this.onOpen.bind(this)}
                    width={21}
                    height={18}
                    animationDuration={0.5}
                />
                </div>
                {this.props.token ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        )
    }
}