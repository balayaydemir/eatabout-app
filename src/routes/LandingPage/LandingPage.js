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
                    <div className="text_image">
                        <p className="LandingPage__text">Eatabout helps you keep track of your must-try restaurants and your experiences from restaurants that you have already been to.</p>
                        <div className="img-container">
                            <img className="LandingPage_img" src="https://imgur.com/Qt8c71C.jpg" alt="fine dining"/>
                            <a href="https://unsplash.com/@bady" target="_blank" rel="noopener noreferrer" className="img-attrib">bady qb</a>
                        </div>
                    </div>
                    <div id="underline_header"></div>
                </section>
                <section className='LandingPage__section'>
                    <header>
                        <h2>Create a Wishlist</h2>
                    </header>
                    <div className="text_image">
                        <div className="img-container">
                            <img className="LandingPage_img" src="https://imgur.com/DdQC2D1.jpg" alt="person making a list"/>
                            <a href="https://unsplash.com/@cathrynlavery" target="_blank" rel="noopener noreferrer" className="img-attrib">Cathryn Lavery</a>
                        </div>
                        <p className="LandingPage__text">Eatabout provides a clean and simple interface where you can keep track of restaurants you have been wanting to try.</p>
                    </div>
                    <div id="underline_header"></div>
                </section>
                <section className='LandingPage__section'>
                    <header>
                        <h2>Record your experiences</h2>
                    </header>
                    <div className="text_image">
                        <p className="LandingPage__text">Eatabout allows you to keep a record of restaurants you have been to. Add photos, give a rating, and keep notes on the experience.</p>
                        <div className="img-container">
                            <img className="LandingPage_img" src="https://imgur.com/px4gK86.jpg" alt="person capturing food on smartphone camera"/>
                            <a href="https://unsplash.com/@eaterscollective" target="_blank" rel="noopener noreferrer" className="img-attrib">Eaters Collective</a>
                        </div>
                    </div>
                    <div id="underline_header"></div>
                </section>
                <section className='LandingPage__section'>
                    <header>
                        <h2>Expand your horizons</h2>
                    </header>
                    <div className="text_image">
                        <div className="img-container">
                            <img className="LandingPage_img" src="https://imgur.com/oeTisvX.jpg" alt="spices"/>
                            <a href="https://unsplash.com/@tiard" target="_blank" rel="noopener noreferrer" className="img-attrib">Tiard Schulz</a>
                        </div>
                        <p className="LandingPage__text">Personalized charts help you uncover patterns in your dining experiences so you can make a conscious effort to broaden your palate.</p>
                    </div>
                    <div id="underline_header"></div>
                </section>
                <section className='LandingPage__section'>
                    <header>
                        <h2>Ready to Eatabout?</h2>
                    </header>
                    <div id="underline_header"></div>
                    <SignupForm registrationSuccess={this.onRegistrationSuccess} capsLock={this.props.capsLock} />
                </section>
            </div>
        )
    }
}