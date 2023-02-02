import React, { useEffect, useState } from 'react';
import './CatBreed.css';

import PageNotFound from '../PageNotFound/PageNotFound';
import FilterCatsByName from './FIlterCatsByName';
import CatBreedsList from './CatBreedsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsBreeds } from '../api/catBreedsActions';
import useFetch from '../../services/useFetch';
import Spinner from '../Spinner/Spinner';

export default function CatBreeds() {
  const dispatch = useDispatch();
  const [nameBreed, setNameBreed] = useState('');
  const catBreeds = useSelector((state) => state.cats.catsBreeds);

  useEffect(() => {
    dispatch(getCatsBreeds());
  }, []);

  function handleNameFilter(breedName) {
    setNameBreed(breedName);
  }

  const filteredCatBreeds = nameBreed
    ? catBreeds.filter((c) => c.name.toLowerCase().includes(nameBreed))
    : catBreeds;

  //if (error) throw error;
  if (catBreeds && catBreeds.length === 0) {
    return (
      <span>
        <h3> Wait for it...</h3>
        <Spinner />
      </span>
    );
  }
  return (
    <div className='container'>
      <FilterCatsByName onChange={handleNameFilter} />
      {filteredCatBreeds && <h2>Found {filteredCatBreeds.length} cats</h2>}
      <CatBreedsList filteredCatBreeds={filteredCatBreeds} />
    </div>
  );
}
