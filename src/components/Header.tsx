import React from 'react';

import '../styles/components/header.css';

import Logo from '../images/Logo.svg';
import mano from '../images/mano.jpg';

import { GoBell } from 'react-icons/go';
import { BsCaretDownFill } from 'react-icons/bs';

export default function Header () {
  return(
    <header className='cabecalho'>
      <div className='left-content'>
        <img className='clicklable' src={Logo} alt="Athena's Logo"/>
        <ul>
          <li className='active clicklable'>Tarefas</li>
          <li className='clicklable'>Portfólio</li>
        </ul>
      </div>
      <div className="right-content">
        <GoBell className='clicklable' size={24} color="#f2faf8" />
        <div className="image-content">
          <img src={mano} alt="foto de usuario"/>
        </div>
        <BsCaretDownFill className='clicklable' size={24} color='#f2faf8' />
      </div>
    </header>
  );
}