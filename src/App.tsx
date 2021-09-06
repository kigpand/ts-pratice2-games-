import React from 'react';
import './App.css';
import Lotto from './components/Lotto';
import RSP from './components/RSP';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <RSP />
      <Lotto />
    </div>
  );
}

export default App;
