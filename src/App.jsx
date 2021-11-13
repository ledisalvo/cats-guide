import React, { useState, useEffect } from 'react';
import './App.css';
import { getDailyCat, getCatBreeds } from './services/catsService';

function CatOfTheDay() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getDailyCat().then((response) => setCat(response));
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <p>This is the Cat of the day...</p>
      {cat.length > 0 ? (
        <img src={cat[0].url} className='App-logo' alt={cat[0].id} />
      ) : (
        <h3> Wait for it...</h3>
      )}
    </>
  );
}

function CatBreedsList() {
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    getCatBreeds().then((response) => setCatBreeds(response));
  }, []);
  return (
    <>
      <div className='container'>
        {catBreeds.length > 0 ? (
          <div className='row'>{catBreeds.map(CatBreedCard)} </div>
        ) : (
          <p>ERROR</p>
        )}
      </div>
    </>
  );
}

function CatBreedCard(catBreedInfo) {
  return (
    <div key={catBreedInfo.id} className='col-md-4'>
      <div className='card-deck'>
        <div className='card'>
          <img
            className='card-img-top card-photo-size'
            src={catBreedInfo.image?.url}
            alt={catBreedInfo.description}
          />
          <div className='card-body'>
            <h5 className='card-title'>{catBreedInfo.name}</h5>
            <p className='card-text'>{catBreedInfo.description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                <a href={catBreedInfo?.wikipedia_url}>View more info here</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CatOfTheDay />
      </header>
      <section>
        <CatBreedsList />
      </section>
    </div>
  );
}
