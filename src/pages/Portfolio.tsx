import React from 'react';

import '../styles/pages/portfolio.css'

import Aside from '../components/Aside';
import Header from '../components/Header';

// import SimpleBar from 'simplebar-react';

function Portfolio () {
  return(
    <div id="app-portfilio">
      <div className="content-wrapper">
        <Header />
        <Aside />
        <main>
           <div className="file-viewer">
             <h1>Teste provisorio</h1>
           </div>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;