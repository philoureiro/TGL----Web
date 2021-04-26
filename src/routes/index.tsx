import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Account from '../pages/Account';
import MyBets from '../pages/MyBets'
import NewBet from '../pages/NewBet';
import RecoveryPassword from '../pages/RecoveryPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/account" exact component={Account} />
    <Route path="/mybets" exact component={MyBets} />
    <Route path="/signup" component={SignUp} />
    <Route path="/recovery" component={RecoveryPassword} />
    <Route path="/newbet" component={NewBet} />
  </Switch>
);

export default Routes;
