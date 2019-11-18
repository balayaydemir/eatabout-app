import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';


export default class LoginPage extends Component {
    render() {
        return (
            <>
                <section className='login'>
                    <header>Log In</header>
                    <form id="login_form">
                        <div className="form_section">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email"></input>
                        </div>
                        <div className="form_section">
                            <label htmlFor="password">Password:</label>
                            <input type="text" name="password"></input>
                        </div>
                        <button type="submit">Log In</button>
                     </form>
                </section>
                <section className='signup'>
                    <header>Not a member yet? Sign Up!</header>
                    <SignupForm />
                </section>
            </>
        )
    }
}