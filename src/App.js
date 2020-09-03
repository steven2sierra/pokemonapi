import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  // style h1
  const styleH1 = {
    color: "#C04C4B"
  }
  return ( 
    <div className="App">
      <div>
        <h1 style = {styleH1}>Pokemon API</h1>
        <Pokemon/>
      </div>
    </div>
  );
}

export default App;
