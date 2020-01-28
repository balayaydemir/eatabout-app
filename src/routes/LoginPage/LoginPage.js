import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { withRouter } from 'react-router-dom';
import './LoginPage.css';
import Loading from '../../components/Loading/Loading';
import useFormValidation from '../../hooks/useFormValidation';
import validateInput from '../../hooks/validateInput';
import swal from 'sweetalert';


const LoginPage = (props) => {
    const [loading, setLoading] = useState(false)

    const inputValues = {
        username: '',
        password: ''
      };


    const onLoginSuccess = (authToken) => {
        const { location, history } = props
        const destination = (location.state || {}).from || '/myrestaurants'
        props.handleGetToken(authToken)
        history.push(destination)
    }


    const handleSubmitJwtAuth = () => {
        setLoading(true)
        const { username, password } = values;
        AuthApiService.postLogin({
            user_name: username,
            password: password,
        })
            .then(res => {
                props.handleGetUserName(username)
                setLoading(false)
                onLoginSuccess(res.authToken)
            })
            .catch(error => {
                setLoading(false)
                swal({
                    title: 'Uh oh!',
                    text: error.error,
                    icon: 'error',
                    button: true
                })
            })
    }

        const {
            handleSubmit,
            errors,
            handleChange,
            values,
            handleBlur,
            isSubmitting,
          } = useFormValidation(
            inputValues,
            validateInput.validateLogin,
            handleSubmitJwtAuth
          );
        return (
            <>
                {loading ? <Loading /> : 
                    <section className='login'>
                        <header>
                            <h2>Login to your account</h2>
                            <div id="demo_underline"></div>
                        </header>
                        <form className="LoginForm" onSubmit={handleSubmit}>
                            <label htmlFor="username">
                                Username: 
                                <input 
                                    name="username"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.username}
                                    onBlur={handleBlur}
                                    placeholder="Username"
                                />
                            </label>
                            {errors.username && <span className="form_error">*{errors.username}</span>}
                            <label htmlFor="password">
                                Password: 
                                <input 
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    placeholder="Password"
                                />
                            </label>
                            {errors.password && <span className="form_error">*{errors.password}</span>}
                            {props.capsLock ? <strong>Caps Lock is On!</strong> : ''}
                            <button type="submit" className="submit" disabled={isSubmitting}>Log In</button>
                        </form>
                    </section>
                }
            </>
        )
    }

    export default withRouter(LoginPage)