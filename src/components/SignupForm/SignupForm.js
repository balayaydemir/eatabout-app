import React, { Component } from 'react';

export default class SignupForm extends Component {
    render() {
        return (
            <form className='signup-form'>
                <div>
                    <label for="first-name">First name</label>
                    <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                </div>
                <div>
                    <label for="last-name">Last name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                </div>
                <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <div>
                    <label for="password_2">Re-Enter Password</label>
                    <input type="password" name='password_2' id='password_2' />
                </div>
            <button type='submit'>Sign Up</button>
            </form>
        )
    }
}