import React from 'react';
import './index.css';
import Board from './Board';
import Square from './Square';

function App() {
  return (
    <div className="App">
      <h1 className='header'>TIC TAC TOE</h1>
      <Board />
    </div>
  );
}

export default App;
