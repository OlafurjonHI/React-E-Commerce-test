import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from  './pages/shoppage/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
        <Route path='/shop/hats' component={HatsPage} />
        
      </Switch>
    </div>
  );
}

export default App;
