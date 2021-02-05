import AuthController from '../controllers/AuthController';
import React, { useState, setState } from 'react';
import './styles/LoginRegisterForm.scss';

function RegisterForm(props) {

  console.log(props)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function attemptRegister(event){
    event.preventDefault();
    AuthController.attemptRegister({
      username,
      password,
      confirmPassword
    });
  }

  return (
    <div className="registerForm">
      <h2>Register</h2>
      <form onSubmit={ attemptRegister }>
        <label htmlFor="registerUsername">Username: </label>
        <input name="registerUsername" onChange={
          (e) => {
            setUsername(e.target.value);
          }
        } />
        <label htmlFor="registerPassword">Password: </label>
        <input type="password" name="registerPassword" onChange={
          (e) => {
            setPassword(e.target.value);
          }
        } />
        <label htmlFor="registerConfirmPassword">Confirm Password: </label>
        <input type="password" name="registerConfirmPassword" onChange={
          (e) => {
            setConfirmPassword(e.target.value);
          }
        } />
        <button type="submit">Register</button>
      </form>
        <div className="formChangeWrapper">
          <a onClick={ props.changeForm }>I already have an account</a>
        </div>
    </div>
  );
}

export default RegisterForm;
