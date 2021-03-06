import React, { useState } from 'react';
import './App.css';
import catProfile from './content/images/cat-profile.png';
import PageNotFound from './PageNotFound';
import useFetch from './services/useFetch';
import { Link } from 'react-router-dom';

function CatBreedsList({ filteredCatBreeds }) {
  return (
    <>
      {filteredCatBreeds && filteredCatBreeds.length > 0 ? (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {filteredCatBreeds.map(CatBreedCard)}{' '}
        </div>
      ) : (
        <p>This search throw 0 results</p>
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
              <Link to={`detail/${catBreedInfo.name}`}>
                View more info here
              </Link>
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

export default function CatBreeds() {
  const [nameBreed, setNameBreed] = useState('');

  const { data: catBreeds, error } = useFetch('breeds');

  function handleNameFilter(breedName) {
    setNameBreed(breedName);
  }

  const filteredCatBreeds = nameBreed
    ? catBreeds.filter((c) => c.name.toLowerCase().includes(nameBreed))
    : catBreeds;

  if (error) throw error;
  if (catBreeds && catBreeds.length === 0) return <PageNotFound />;
  return (
    <div className='container'>
      <FilterCatsByName onChange={handleNameFilter} />
      {filteredCatBreeds && <h2>Found {filteredCatBreeds.length} cats</h2>}
      <CatBreedsList filteredCatBreeds={filteredCatBreeds} />
    </div>
  );
}
