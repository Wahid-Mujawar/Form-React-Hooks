import './App.css';
import React, { useState } from 'react';

function FormUsingHook() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstInputchange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  return (
    <div className="form-container">
      <form className="register-form">
        <input
        onChange={handleFirstInputchange}
          values={values.firstName}
          className = "form-field"
          placeholder ="First Name"
          name="firstName">
        </input>

        <input
          values={values.lastName}
          className = "form-field"
          placeholder ="Last Name"
          name="lastName">
        </input>

        <input
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
