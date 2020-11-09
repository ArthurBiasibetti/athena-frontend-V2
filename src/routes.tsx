import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing_page';
import Login from './pages/Login';
import Tarefas from './pages/Tarefas';
import Portfolio from './pages/Portfolio';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/tarefas' component={Tarefas} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;