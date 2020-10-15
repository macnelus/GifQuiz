import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
