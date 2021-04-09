import { store } from './store/store';
import { Provider } from 'react-redux';

import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RecoveryPassword from './pages/RecoveryPassword';
import MyBets from './pages/MyBets';
import NewBet from './pages/NewBet';

function App() {
  return (
    <Provider store={store}>
      <NewBet />
    </Provider>
  );
}

export default App;
