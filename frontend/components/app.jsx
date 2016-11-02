import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import UserAccount from './user_account/user_account';

const App = ({ children }) => (
  <div className="app-container">
    <GreetingContainer/>
    {children}
  </div>
);

export default App;
