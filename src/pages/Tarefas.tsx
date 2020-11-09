import React from 'react';

import Header from '../components/Header'
import '../styles/pages/tarefas.css';

import SimpleBar from 'simplebar-react';

function Tarefas() {
  return (
    <div id="app-tarefas">
      <div className="content-wrapper">
        <Header />
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