import React from 'react';
import './App.css';
import { Router } from './coordinator/router';
import { PokeProvider } from './providers/PokeProvider';

function App() {
  return (
    <PokeProvider>
      <Router/>  
    </PokeProvider>
  );
}

export default App;
