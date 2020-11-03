import React from 'react';

import '../styles/pages/tarefas.css';

import { GoBell } from 'react-icons/go'
import { BsCaretDownFill } from 'react-icons/bs'
import SimpleBar from 'simplebar-react';

import Logo from '../images/Logo.svg'
import mano from '../images/mano.jpg'

function Tarefas() {
  return (
    <div id="app-tarefas">
      <div className="content-wrapper">
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
        <aside>
          <SimpleBar style={{maxHeight: '100%'}}>
            <ul className='turma-list'>
              <li>
                Turma 1 
                <div className='tarefa-list'>
                <ul>
                  <li>Tarefa 1</li>
                  <li>Tarefa 2</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 4</li>        
                </ul>
                </div>
              </li>
              <li>Turma 2
              <div className='tarefa-list'>
                <ul>
                  <li>Tarefa 1</li>
                  <li>Tarefa 2</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 3</li>
                  <li>Tarefa 4</li>        
                </ul>
                </div>
              </li>
              <li>Turma 3</li>
              <li>Turma 4</li>
              <li>Turma 5</li>
            </ul>
          </SimpleBar>
        </aside>
        <main>
          <SimpleBar style={{maxHeight: '100%'}}>
            <div className="tarefa-infos">
              <header>
                <h4>Tarefa: Tarefa 1</h4>
                <h4>Turma: Turma 1</h4>
                <h4>Professor: Silva</h4>
              </header>
              <div className="left-side">
                <h4>Nota: pendente / 10</h4>
                <h4>Data de entrega: 10</h4>
                <h4>Status: Pendente</h4>
              </div>
              <div  className="right-side">
                
                <h2>Decrição</h2>
                <SimpleBar style={{maxHeight: 'calc(100% - 40px)', minWidth: '100%'}}>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nam maiores consectetur, accusantium distinctio nesciunt inventore omnis eveniet voluptatum dolores itaque esse totam eum? Ea fuga corrupti est culpa harum?</h4>
                </SimpleBar>
              </div>
            </div>
          </SimpleBar>
        </main>
      </div>
    </div>
  );
}

export default Tarefas;