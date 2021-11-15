import React, { useState, useEffect } from 'react';
import './App.css';
import { getDailyCat, getCatBreeds } from './services/catsService';
import catProfile from './content/images/cat-profile.png';

function CatOfTheDay() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getDailyCat().then((response) => setCat(response));
  }, []);

  return (
    <>
      <h1>Welcome to Cat's catalog breeds</h1>
      <p>This is the Cat of the day...</p>
      {cat.length > 0 ? (
        <img src={cat[0].url} className='App-logo' alt={cat[0].id} />
      ) : (
        <h3> Wait for it...</h3>
      )}
    </>
  );
}

function CatBreedsList({ filteredCatBreeds }) {
  return (
    <>
      {filteredCatBreeds.length > 0 ? (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {filteredCatBreeds.map(CatBreedCard)}{' '}
        </div>
      ) : (
        <p>ERROR</p>
      )}
    </>
  );
}

function CatBreedCard(catBreedInfo) {
  return (
    <div className='col' key={catBreedInfo.id}>
      <div className='card'>
        {typeof catBreedInfo.image !== 'undefined' &&
        Object.entries(catBreedInfo.image).length !== 0 ? (
          <img
            className='card-img-top card-photo-size'
            src={catBreedInfo.image.url}
            alt={catBreedInfo.description}
          />
        ) : (
          <img
            className='card-img-top card-photo-size'
            src={catProfile}
            alt='error'
          />
        )}
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
  );
}

function FilterCatsByName(props) {
  return (
    <div className='input-group mb-3 mt-4'>
      <input
        type='text'
        className='form-control'
        placeholder='Search a breed or leave empty to view all'
        aria-label='Username'
        aria-describedby='basic-addon1'
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}

export default function App() {
  const [catBreeds, setCatBreeds] = useState([]);
  const [nameBreed, setNameBreed] = useState('');

  useEffect(() => {
    getCatBreeds().then((response) => setCatBreeds(response));
  }, []);

  function handleNameFilter(breedName) {
    setNameBreed(breedName);
  }

  const filteredCatBreeds = nameBreed
    ? catBreeds.filter((c) => c.name.toLowerCase().includes(nameBreed))
    : catBreeds;

  debugger;

  return (
    <div className='App'>
      <header className='App-header'>
        <CatOfTheDay />
      </header>
      <section>
        <div className='container'>
          <FilterCatsByName onChange={handleNameFilter} />
          <CatBreedsList filteredCatBreeds={filteredCatBreeds} />
        </div>
      </section>
    </div>
  );
}
