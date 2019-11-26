import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './SignupForm.css';

export default class SignupForm extends Component {
    static defaultProps = {
        registrationSuccess: () => {}
    }

    state = { 
        error: null
    }


    handleSubmit = e => {
        e.preventDefault()
        const { full_name, user_name, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value
        })
            .then(user => {
                full_name.value = ''
                user_name.value = ''
                password.value = ''
                this.props.registrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }
    render() {
        const { error } = this.state
        return (
            <form className='SignUpForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div>
                    <label htmlFor="SignUpForm__user_name">Username: </label>
                    <input placeholder='User Name' type="text" name='user_name' id='SignUpForm__user_name' />
                </div>
                <div>
                    <label htmlFor="SignUpForm__full_name">Full name: </label>
                    <input type="text" name='full_name' id='SignUpForm__full_name' placeholder='Full Name' />
                </div>
                <div>
                    <label htmlFor="SignUpForm__password">Password: </label>
                    <input type="password" name='password' id='SignUpForm__password' />
                     {this.props.capsLock ? <strong>Caps Lock is On!</strong> : ''}
                </div>
            <button type='submit' className="submit">Sign Up</button>
            </form>
        )
    }
}