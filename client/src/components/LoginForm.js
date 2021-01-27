import AuthController from '../controllers/AuthController';
import React, { useState, setState } from 'react';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    function attemptLogin(event){
        event.preventDefault()
        AuthController.attemptLogin({
            username,
            password
        });
    }

  return (
    <div className="loginForm">
      <form onSubmit={ attemptLogin }>
        <label htmlFor="loginUsername" value={username}>Username</label>
        <input name="loginUsername" onChange={
            (e) => {
                setUsername(e.target.value);
            }
        } />
        <label htmlFor="loginPassword">Password</label>
        <input name="loginPassword" value={password} onChange={
            (e) => {
                setPassword(e.target.value);
            }
        }/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
