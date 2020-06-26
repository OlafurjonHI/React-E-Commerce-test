import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from  './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount=this.unsubscribeFromAuth;

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/shop/hats' component={HatsPage} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
