import React from 'react';

import '../styles/pages/login.css'

function Login() {
  return (
    <div id="app-login">
      <div className="content-wrapper">
        <h1>Logar-se</h1>
        <form className='login'>
          <div className="input-block">
            <label htmlFor='email'> Email </label>
              <input id='email' type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor='senha'> Senha </label>
              <input id='senha' type="text"/>
          </div>
          <button className='confirm-button' type='button'>
            Logar-se
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;