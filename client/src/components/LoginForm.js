import AuthController from '../controllers/AuthController';
import React, { useState, setState } from 'react';

function LoginForm(props) {

    console.log(props);

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
      <h2>Login</h2>
      <form onSubmit={ attemptLogin }>
        <label htmlFor="loginUsername" value={username}>Username</label>
        <input name="loginUsername" onChange={
            (e) => {
                setUsername(e.target.value);
            }
        } />
        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" value={password} onChange={
            (e) => {
                setPassword(e.target.value);
            }
        }/>
        <button type="submit">Login</button>
      </form>
        <div className="formChangeWrapper">
          <a onClick={ props.changeForm }>I don't have an account</a>
        </div>
    </div>
  );
}

export default LoginForm;
