import './LoginRegister.scss';
import React, { setState, useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginRegister() {

    const [loginOverRegister, setLoginOrRegister] = useState(true)

    function RenderForm(){
        if(loginOverRegister) return <LoginForm />
        return <RegisterForm />
    }

    function changeForm(){
        setLoginOrRegister(!loginOverRegister)
    }

  return (
    <div className="loginRegister">
        <RenderForm />
          <button onClick={ changeForm }>Change</button>
    </div>
  );
}

export default LoginRegister;
