import React from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <KanbanBoard />
    </div>
  );
};

export default App;