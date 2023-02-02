import CatBreedCard from './CatBreedsCard/CatBreedCard';

const CatBreedsList = ({ filteredCatBreeds }) => {
  return (
    <>
      {filteredCatBreeds && filteredCatBreeds.length > 0 ? (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {filteredCatBreeds.map((catBreedInfo) => (
            <CatBreedCard key={catBreedInfo.id} catBreedInfo={catBreedInfo} />
          ))}
        </div>
      ) : (
        <p>This search throw 0 results</p>
      )}
    </>
  );
};

export default CatBreedsList;
