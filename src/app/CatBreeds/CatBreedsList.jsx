import CatBreedCard from './CatBreedsCard/CatBreedCard';

const CatBreedsList = ({ filteredCatBreeds }) => {
  return (
    <>
      {filteredCatBreeds && filteredCatBreeds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCatBreeds.map((catBreedInfo) => (
            <CatBreedCard key={catBreedInfo.id} catBreedInfo={catBreedInfo} />
          ))}
        </div>
      ) : (
        <p className="font-body text-sm text-muted text-center py-8">
          Esta búsqueda no arrojó resultados
        </p>
      )}
    </>
  );
};

export default CatBreedsList;
