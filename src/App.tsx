import React from 'react';
import './App.css';
import RSP from './components/RSP';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <RSP />
    </div>
  );
}

export default App;
