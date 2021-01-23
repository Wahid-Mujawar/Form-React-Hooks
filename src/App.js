import './App.css';
import React from 'react'

function FormUsingHook() {

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          className = "form-field">
          placeholder ="First Name"
          name="firstname"
        </input>

        <input
          className = "form-field">
          placeholder ="Last Name"
          name="lastname"
        </input>

        <input
          className = "form-field">
          placeholder ="Email"
          name="email"
        </input>
      </form>
     
    </div>
  );
}

export default FormUsingHook;
