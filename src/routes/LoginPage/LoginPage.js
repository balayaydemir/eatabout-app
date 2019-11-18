import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';


export default class LoginPage extends Component {
    render() {
        return (
            <>
                <section className='login'>
                    <header>Log In</header>
                    <form id="login_form">
                        <div class="form_section">
                            <label for="email">Email:</label>
                            <input type="text" name="email"></input>
                        </div>
                        <div class="form_section">
                            <label for="password">Password:</label>
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