const validateInput = {

  validateLogin(values) {
    let errors = {};

    if (!values.username) {
      errors.username = 'Please enter your username';
    }
    if (!values.password) {
      errors.password = 'Please enter your password';
    }

    return errors;
  },

  validateSignup(values) {
    let errors = {};
    let passRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );

    if (!values.username) {
      errors.username = 'Please enter a username';
    }
    
    if (!values.fullname) {
      errors.fullname = 'Please enter your full name'
    }

    if (!values.password) {
      errors.password = 'Please enter a password';
    }
    if (values.password && !passRegex.test(values.password)) {
      errors.password =
        'Password must be eight characters or longer and contain at least 1 lowercase, 1 uppercase, 1 numeric, and one special character';
    }

    return errors;
  },

};

export default validateInput;
