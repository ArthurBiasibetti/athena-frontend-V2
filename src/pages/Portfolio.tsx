import React from 'react';

import Aside from '../components/Aside';
import Header from '../components/Header';

function Portfolio () {
  return(
    <div className="app-portfilio">
      <div className="content-wrapper">
        <Header />
        <Aside />
      </div>
    </div>
  );
}

export default Portfolio;