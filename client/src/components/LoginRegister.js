import './LoginRegister.scss';
import React, { setState, useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './styles/LoginRegister.scss';

function LoginRegister() {

    const [loginOverRegister, setLoginOrRegister] = useState(true)

    function RenderForm(){
        if(loginOverRegister) return <LoginForm changeForm={ changeForm }/>
        return <RegisterForm changeForm={ changeForm }/>
    }

    function changeForm(){
        setLoginOrRegister(!loginOverRegister)
    }

  return (
    <div className="loginRegister">
        <RenderForm />
    </div>
  );
}

export default LoginRegister;
