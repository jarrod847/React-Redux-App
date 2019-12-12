import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import './styles/styles.scss'

function App() {
  return (
    <div className='App'>
        <h1>Pokedex</h1>
        <div className="card">
          <PokemonList />
        </div>      
    </div>
  );
}

export default App;
