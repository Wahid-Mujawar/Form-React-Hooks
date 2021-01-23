import './App.css';
import React, { useState } from 'react';

function FormUsingHook() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const[submitted, setSubmitted] = useState(false)
  const handleFirstNameInputchange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputchange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputchange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className="success-message">Success !
        Thankyou for registering</div> : null}
        <input
          onChange={handleFirstNameInputchange}
          values={values.firstName}
          className = "form-field"
          placeholder ="First Name"
          name="firstName">
        </input>

        <input
          onChange={handleLastNameInputchange}
          values={values.lastName}
          className = "form-field"
          placeholder ="Last Name"
          name="lastName">
        </input>

        <input
          onChange={handleEmailInputchange}
          values={values.email}
          className = "form-field"
          placeholder ="Email"
          name="email">
        </input>

        <button 
        className = "form-field"
        type="submit">Register
        </button>
      </form>
    </div>
  );
}

export default FormUsingHook;
