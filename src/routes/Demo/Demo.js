import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './Demo.css';
import Loading from '../../components/Loading/Loading';

export default class Demo extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }


    state = {
        error: null,
        loading: false
    }


    onLoginSuccess = (authToken) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/myrestaurants'
        this.props.handleGetToken(authToken)
        history.push(destination)
    }


    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null, loading: true })
        const { user_name, password } = e.target;
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                this.props.handleGetUserName(user_name.value)
                user_name.value = ''
                password.value = ''
                this.setState({ loading: false })
                this.onLoginSuccess(res.authToken)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }



    render() {
        const { error, loading } = this.state
        return (
            <>
                {loading ? <Loading /> :
                    <section className='login'>
                        <header>
                            <h2>Eatabout Demo</h2>
                            <div id="demo_underline"></div>
                        </header>
                        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className="form_section">
                                <label htmlFor="LoginForm__user_name">Username: </label>
                                <input type="text" name="user_name" id="LoginForm__user_name" defaultValue="Eatabout_Demo"></input>
                            </div>
                            <div className="form_section">
                                <label htmlFor="LoginForm__password">Password: </label>
                                <input type="password" name="password" id="LoginForm__password" defaultValue="Password1!"></input>
                                {this.props.capsLock ? <strong>Caps Lock is On!</strong> : ''}
                            </div>
                            <button type="submit" className="submit">Log In</button>
                        </form>
                    </section>
                }
            </>
        )
    }
}