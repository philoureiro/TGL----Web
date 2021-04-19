//import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RecoveryPassword from './pages/RecoveryPassword';
import MyBets from './pages/MyBets';
import NewBet from './pages/NewBet';
import Route from '../src/routes/index';

function App() {
  return (
    //<Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default App;
