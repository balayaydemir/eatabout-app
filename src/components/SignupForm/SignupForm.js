import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import useFormValidation from '../../hooks/useFormValidation';
import validateInput from '../../hooks/validateInput';
import swal from 'sweetalert';
import './SignupForm.css';

const SignupForm = (props) => {
    const inputValues = {
        username: '',
        password: ''
      };

    const handleSignUp = () => {

        const { fullname, username, password } = values

        AuthApiService.postUser({
            user_name: username,
            password: password,
            full_name: fullname
        })
            .then(() => {
                props.registrationSuccess()
            })
            .catch(error => {
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
        validateInput.validateSignup,
        handleSignUp
      );

        return (
            <form className='SignUpForm' onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username: 
                    <input 
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        onBlur={handleBlur}
                        placeholder="Username"
                    />
                </label>
                {errors.username && <span className="form_error">*{errors.username}</span>}
                <label htmlFor="fullname">
                    Full Name: 
                    <input 
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        value={values.fullname}
                        onBlur={handleBlur}
                        placeholder="Full Name"
                    />
                </label>
                {errors.fullname && <span className="form_error">*{errors.fullname}</span>}
                <label htmlFor="password">
                    Password: 
                    <input 
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                        placeholder="Password"
                    />
                </label>
                {errors.password && <span className="form_error">*{errors.password}</span>}
                {props.capsLock ? <strong>Caps Lock is On!</strong> : ''}
                <button type='submit' className="submit" disabled={isSubmitting}>Sign Up</button>
            </form>
        )
    }

    export default SignupForm
