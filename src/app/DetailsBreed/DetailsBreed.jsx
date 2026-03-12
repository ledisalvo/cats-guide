import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedDetails } from '../api/catBreedsActions';
import LabelInfoDescripcion from './LabelInfoDescription';
import DetailAvatar from './DetailAvatar';
import BreedCharacteristics from './BreedCharacteristics';
import LoadingModal from '../common/modals/Loading/LoadingModal';

const CHARACTERISTICS = [
  { key: 'adaptability', label: 'Adaptabilidad' },
  { key: 'affection_level', label: 'Nivel de afecto' },
  { key: 'child_friendly', label: 'Amigable con niños' },
  { key: 'dog_friendly', label: 'Amigable con perros' },
  { key: 'energy_level', label: 'Nivel de energía' },
  { key: 'grooming', label: 'Aseo' },
  { key: 'health_issues', label: 'Problemas de salud' },
  { key: 'hypoallergenic', label: 'Hipoalergénico' },
  { key: 'intelligence', label: 'Inteligencia' },
  { key: 'shedding_level', label: 'Nivel de muda' },
  { key: 'social_needs', label: 'Necesidades sociales' },
  { key: 'stranger_friendly', label: 'Amigable con extraños' },
  { key: 'vocalisation', label: 'Vocalización' },
  { key: 'experimental', label: 'Experimental' },
  { key: 'hairless', label: 'Sin pelo' },
  { key: 'natural', label: 'Natural' },
  { key: 'rare', label: 'Raro' },
  { key: 'rex', label: 'Rex' },
  { key: 'suppressed_tail', label: 'Cola suprimida' },
  { key: 'short_legs', label: 'Patas cortas' },
  { key: 'Indoor', label: 'Interior' },
];

export default function DetailsBreed() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const breedDetail = useSelector((state) => state.cats.breedDetails);
  const { loading, error } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(getBreedDetails(name));
  }, []);

  if (error) return <PageNotFound />;
  if (loading) return <LoadingModal />;
  if (!breedDetail || breedDetail.length === 0) return <PageNotFound />;

  const breed = breedDetail[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <DetailAvatar breedDetail={breedDetail} />
          <div className="bg-surface border border-border rounded-2xl p-4">
            <p className="font-body text-sm text-muted leading-relaxed mb-4">
              {breed.description}
            </p>
            <LabelInfoDescripcion label="Origen" description={breed.country_code} />
            <LabelInfoDescripcion
              label="Esperanza de vida"
              description={`${breed.life_span} años`}
            />
            <LabelInfoDescripcion label="Peso" description={`${breed.weight.metric} Kg`} />
            {breed.vcahospitals_url && (
              <LabelInfoDescripcion label="VCA Hospitals" linkDescription={breed.vcahospitals_url} />
            )}
            {breed.vetstreet_url && (
              <LabelInfoDescripcion label="VetStreet" linkDescription={breed.vetstreet_url} />
            )}
            {breed.wikipedia_url && (
              <LabelInfoDescripcion label="Wikipedia" linkDescription={breed.wikipedia_url} />
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="bg-surface border border-border rounded-2xl p-6">
          <h5 className="font-heading text-base font-bold text-foreground mb-6">
            Características
          </h5>
          {CHARACTERISTICS.map(({ key, label }) =>
            breed[key] ? <BreedCharacteristics key={key} title={label} value={breed[key]} /> : null
          )}
        </div>
      </div>
    </div>
  );
}
