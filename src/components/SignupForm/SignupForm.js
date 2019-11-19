import React, { Component } from 'react';

export default class SignupForm extends Component {
    render() {
        return (
            <form className='signup-form'>
                <div>
                    <label htmlFor="first-name">Username</label>
                    <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                </div>
                <div>
                    <label htmlFor="last-name">Full name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <div>
                    <label htmlFor="password_2">Re-Enter Password</label>
                    <input type="password" name='password_2' id='password_2' />
                </div>
            <button type='submit'>Sign Up</button>
            </form>
        )
    }
}