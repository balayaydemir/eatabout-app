import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class Header extends Component {

    handleLogout = () => {
        this.props.handleGetToken(null);
        TokenService.clearAuthToken();
    }


    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                  to='/login'>
                  Log In
                </Link>
            </div>
        )
    }
    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    to='/myrestaurants'>
                    My Restaurants
                </Link>
                <Link 
                    to='/mystats'>
                    My Stats
                </Link>
                <Link
                    onClick={this.handleLogout}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    
    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        Eatabout Logo
                    </Link>
                </h1>
                {this.props.token ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        )
    }
}