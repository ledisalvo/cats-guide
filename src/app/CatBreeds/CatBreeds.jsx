import React, { useEffect, useState } from 'react';
import './CatBreed.css';

import PageNotFound from '../PageNotFound/PageNotFound';
import FilterCatsByName from './FIlterCatsByName';
import CatBreedsList from './CatBreedsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsBreeds } from '../api/catBreedsActions';
import { closeModal, openModal } from '../common/modals/modalReducer';
import LoadingModal from '../common/modals/Loading/LoadingModal';
import CatBreedCardPlaceholder from './CatBreedsCard/CatBreedCardPlaceholder';

export default function CatBreeds() {
  const dispatch = useDispatch();
  const [nameBreed, setNameBreed] = useState('');
  const catBreeds = useSelector((state) => state.cats.catsBreeds);
  const { loading, error } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(getCatsBreeds());
  }, []);

  function handleNameFilter(breedName) {
    setNameBreed(breedName);
  }

  const filteredCatBreeds = nameBreed
    ? catBreeds.filter((c) => c.name.toLowerCase().includes(nameBreed))
    : catBreeds;

  if (error) return <PageNotFound />;
  if (loading) return <LoadingModal />;

  return (
    <div className='container'>
      <FilterCatsByName onChange={handleNameFilter} />
      {filteredCatBreeds && <h2>Found {filteredCatBreeds.length} cats</h2>}
      <CatBreedsList filteredCatBreeds={filteredCatBreeds} />
    </div>
  );
}
