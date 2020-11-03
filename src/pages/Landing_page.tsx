import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

import logo from '../images/Logo.svg'
import checkbox from '../images/checkbox.svg'

function Landing() {
  return (
    <div id='app-landing'>
      <div className='left-wrapper'>
        <img className='logo' src={logo} alt="Athena's Assist" />
        
        <span> <img src={checkbox} alt='CheckboxImage'/>Organize suas tarefas de forma <strong>eficiente</strong>, </span> <span> <strong>fácil</strong> e   <strong>prática</strong></span>
      </div>
      <div className='right-wrapper'>
        <h1>Cadastre-se agora!</h1>
        <form className='create-user'>
          <div className="input-block">
            <label htmlFor='email'> Email </label>
              <input id='email' type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor='name'> Nome de usuário </label>
              <input id='name' type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor='senha'> Senha </label>
              <input id='senha' type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor='confirmeSenha'> Confirme a senha </label>
              <input id='confirmeSenha' type="text"/>
          </div>

          <button className='confirm-button' type='button'>
            Cadastre-se
          </button>
          
        </form>
        <span className='sendToLogin'> <Link to='/login'>Já possuo cadastro</Link> </span>
      </div>
    </div>
  );
}

export default Landing;