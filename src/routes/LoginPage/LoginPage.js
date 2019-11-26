import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './LoginPage.css';

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }


    state = {
        error: null
    }


    onLoginSuccess = (authToken) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/myrestaurants'
        this.props.handleGetToken(authToken)
        history.push(destination)
    }


    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null })
        const { user_name, password } = e.target;
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                this.props.handleGetUserName(user_name.value)
                user_name.value = ''
                password.value = ''
                this.onLoginSuccess(res.authToken)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }



    render() {
        const { error } = this.state
        return (
            <>
                <section className='login'>
                    <header>
                        <h2>Login to your account</h2>
                    </header>
                    <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className="form_section">
                            <label htmlFor="LoginForm__user_name">Username: </label>
                            <input type="text" name="user_name" id="LoginForm__user_name"></input>
                        </div>
                        <div className="form_section">
                            <label htmlFor="LoginForm__password">Password: </label>
                            <input type="password" name="password" id="LoginForm__password"></input>
                            {this.props.capsLock ? <strong>Caps Lock is On!</strong> : ''}
                        </div>
                        <button type="submit" className="submit">Log In</button>
                    </form>
                </section>
            </>
        )
    }
}