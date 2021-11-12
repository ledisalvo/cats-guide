import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDailyCat } from './services/catsService';

export default function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getDailyCat().then((response) => setCats(response));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome</h1>
        <h5>This is the Cat of the day...</h5>
        {cats.length > 0 ? (
          <img src={cats[0].url} className='App-logo' alt='logo' />
        ) : (
          <h3> Wait for it...</h3>
        )}
        <p>Psst... reload the page to get another kitten!</p>
      </header>
    </div>
  );
}
