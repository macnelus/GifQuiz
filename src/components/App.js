import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/home';
import GiphyPage from '../pages/giphy-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/giph" component={GiphyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
