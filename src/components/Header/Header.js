import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                  to='/login'>
                  Log In
                </Link>
                <Link 
                  to='/demo'>
                  Demo
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
                {this.renderLoginLink()}
            </nav>
        )
    }
}