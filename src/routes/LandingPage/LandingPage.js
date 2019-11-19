import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

export default class LandingPage extends Component {
    onRegistrationSuccess = user => {
        const { history } = this.props;
        history.push('/login')
    }

    render() {
        return (
            <>
            <section className='LandingPage__section'>
                <header>
                    <h3>Keep track of your dining experiences, both future and past</h3>
                </header>
                <p>Eatabout helps you keep track of your must-try restaurants and your experiences from restaurants that you have already been to.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h3>Create a hit list</h3>
                </header>
                <p>Every foodie has a mental (or physical) list of restaurants that they want to try. Eatabout provides you with a clean and simple interface where you can log these restaurants and organize them by cuisine and city. No more frantic googling to try and figure out the name of that one spot you've been dying to try.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h3>Record your experiences</h3>
                 </header>
                 <p>Eatabout gives you the ability to keep a record of restaurants you have visited organized by city and cuisine. For each restaurant, you can provide a rating, photos and descriptions of the dishes you ate, and detailed notes about the experience. You can also share specific restaurants or an entire list with friends.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h3>Expand your horizons</h3>
                </header>
                <p>Personalized charts and statistics help you uncover patterns in your dining experiences so you can make a conscious effort to broaden your palate.</p>
            </section>
            <section className='LandingPage__section'>
                <header>
                    <h3>Ready to Eatabout?</h3>
                </header>
                 <SignupForm registrationSuccess={this.onRegistrationSuccess}/>
            </section>
            </>
        )
    }
}