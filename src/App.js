import './App.css';
import React, { useState } from 'react'

function FormUsingHook() {

  const [values, setValues] = useState({
    firstName="",
    lastName="",
    email="",
  });

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          className = "form-field"
          placeholder ="First Name"
          name="firstname">
        </input>

        <input
          className = "form-field"
          placeholder ="Last Name"
          name="lastname">
        </input>

        <input
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
