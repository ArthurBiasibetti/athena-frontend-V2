import React from 'react';

import '../styles/components/aside.css'

import SimpleBar from 'simplebar-react';

export default function Aside () {
  return (
    <aside>
      <SimpleBar style={{maxHeight: '100%'}}>
        <ul className='list'>
        <li>
            <span>Turma 1</span> 
            <div className='sub-list'>
              <ul>
                <li><span>arefa 1</span></li>
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
        </ul>
      </SimpleBar>
    </aside>
  );
}
