import React, { useEffect, useState } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';
import FilterCatsByName from './FIlterCatsByName';
import CatBreedsList from './CatBreedsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsBreeds } from '../api/catBreedsActions';
import LoadingModal from '../common/modals/Loading/LoadingModal';

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Razas de gatos</h1>
      <FilterCatsByName onChange={handleNameFilter} />
      {filteredCatBreeds && (
        <p className="font-body text-xs text-muted mb-4">
          {filteredCatBreeds.length} raza{filteredCatBreeds.length !== 1 ? 's' : ''} encontrada
          {filteredCatBreeds.length !== 1 ? 's' : ''}
        </p>
      )}
      <CatBreedsList filteredCatBreeds={filteredCatBreeds} />
    </div>
  );
}
