import React from 'react';
import './App.css';
import { RegistrationForm } from './components/registrationForm'
import { UserList } from './components/userList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>RentZend’s Engineering Team Interview</h2>
      </header>
      <RegistrationForm />
      <UserList />
    </div>
  );
}

export default App;
