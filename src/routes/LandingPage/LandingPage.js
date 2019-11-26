import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './LandingPage.css';


export default class LandingPage extends Component {

    onRegistrationSuccess = user => {
        const { history } = this.props;
        history.push('/login')
    }

    render() {
        return (
            <div className="LandingPage">
            <section className='LandingPage__section'>
                <header>
                    <h2>Keep track of your dining experiences, both future and past</h2>
                </header>
                <div id="underline_header"></div>
                <p className="hidden">Eatabout helps you keep track of your must-try restaurants and your experiences from restaurants that you have already been to.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h2>Create a Wishlist</h2>
                </header>
                <div id="underline_header"></div>
                <p className="hidden">Every foodie has a list of restaurants that they want to try. Eatabout provides you with a clean and simple interface where you can keep track of these places. No more frantic googling to try and figure out the name of that one spot you've been dying to try.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h2>Record your experiences</h2>
                 </header>
                 <div id="underline_header"></div>
                 <p className="hidden">Eatabout gives you the ability to keep a record of restaurants you have visited. For each restaurant you can enter a rating, add photos of the dishes you ate, and keep detailed notes about the experience.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h2>Expand your horizons</h2>
                </header>
                <div id="underline_header"></div>
                <p className="hidden">Personalized charts help you uncover patterns in your dining experiences so you can make a conscious effort to broaden your palate.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h2>Ready to Eatabout?</h2>
                </header>
                <div id="underline_header"></div>
                 <SignupForm registrationSuccess={this.onRegistrationSuccess} capsLock={this.props.capsLock}/>
            </section>
            </div>
        )
    }
}