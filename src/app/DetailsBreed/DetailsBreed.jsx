import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import './DetailsBreed.css';
import Spinner from '../Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getBreedDetails } from '../api/catBreedsActions';
import LabelInfoDescripcion from './LabelInfoDescription';
import DetailAvatar from './DetailAvatar';
import BreedCharacteristics from './BreedCharacteristics';
import LoadingModal from '../common/modals/Loading/LoadingModal';

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

  return (
    <>
      {breedDetail && breedDetail.length > 0 ? (
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <DetailAvatar breedDetail={breedDetail} />
              <p style={{ marginTop: '20px' }}>{breedDetail[0].description}</p>
              <div style={{ marginTop: '20px' }}>
                <ul className='list-style9 no-margin'>
                  <li>
                    <LabelInfoDescripcion
                      icon='fas fa-graduation-cap'
                      label='Origin:'
                      description={breedDetail[0].country_code}
                    />
                  </li>
                  <li>
                    <LabelInfoDescripcion
                      icon='far fa-gem'
                      label='Life Span:'
                      description={breedDetail[0].life_span + ' years'}
                    />
                  </li>
                  <li>
                    <LabelInfoDescripcion
                      icon='far fa-file'
                      label='Weight:'
                      description={breedDetail[0].weight.metric + ' Kg'}
                    />
                  </li>
                  {breedDetail[0].vcahospitals_url && (
                    <li>
                      <LabelInfoDescripcion
                        icon='fas fa-map-marker-alt'
                        label='VCA Hospitals Info:'
                        linkDescription={breedDetail[0].vcahospitals_url}
                      />
                    </li>
                  )}
                  {breedDetail[0].vetstreet_url && (
                    <li>
                      <LabelInfoDescripcion
                        icon='fas fa-map-marker-alt'
                        label='VetStreet Info:'
                        linkDescription={breedDetail[0].vetstreet_url}
                      />
                    </li>
                  )}
                  {breedDetail[0].wikipedia_url && (
                    <li>
                      <LabelInfoDescripcion
                        icon='fas fa-map-marker-alt'
                        label='Wikipedia Info:'
                        linkDescription={breedDetail[0].wikipedia_url}
                      />
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className='col-8'>
              <h5 style={{ marginTop: '20px' }}>Characteristics</h5>
              <div className='sm-no-margin'>
                {breedDetail[0]?.adaptability && (
                  <BreedCharacteristics
                    title='Adaptability'
                    value={breedDetail[0]?.adaptability}
                  />
                )}
                {breedDetail[0]?.affection_level && (
                  <BreedCharacteristics
                    title='Affection Level'
                    value={breedDetail[0]?.affection_level}
                  />
                )}
                {breedDetail[0]?.child_friendly && (
                  <BreedCharacteristics
                    title='Child Friendly'
                    value={breedDetail[0]?.child_friendly}
                  />
                )}
                {breedDetail[0]?.dog_friendly && (
                  <BreedCharacteristics
                    title='Dog Friendly'
                    value={breedDetail[0]?.dog_friendly}
                  />
                )}
                {breedDetail[0]?.energy_level && (
                  <BreedCharacteristics
                    title='Energy Level'
                    value={breedDetail[0]?.energy_level}
                  />
                )}
                {breedDetail[0]?.experimental && (
                  <BreedCharacteristics
                    title='Experimental'
                    value={breedDetail[0]?.experimental}
                  />
                )}
                {breedDetail[0]?.grooming && (
                  <BreedCharacteristics
                    title='Grooming'
                    value={breedDetail[0]?.grooming}
                  />
                )}
                {breedDetail[0]?.hairless && (
                  <BreedCharacteristics
                    title='Hairless'
                    value={breedDetail[0]?.hairless}
                  />
                )}
                {breedDetail[0]?.health_issues && (
                  <BreedCharacteristics
                    title='Health Issues'
                    value={breedDetail[0]?.health_issues}
                  />
                )}
                {breedDetail[0]?.hypoallergenic && (
                  <BreedCharacteristics
                    title='Hypoallergenic'
                    value={breedDetail[0]?.hypoallergenic}
                  />
                )}
                {breedDetail[0]?.Indoor && (
                  <BreedCharacteristics
                    title='Indoor'
                    value={breedDetail[0]?.Indoor}
                  />
                )}
                {breedDetail[0]?.intelligence && (
                  <BreedCharacteristics
                    title='Intelligence'
                    value={breedDetail[0]?.intelligence}
                  />
                )}
                {breedDetail[0]?.natural && (
                  <BreedCharacteristics
                    title='Natural'
                    value={breedDetail[0]?.natural}
                  />
                )}
                {breedDetail[0]?.rare && (
                  <BreedCharacteristics
                    title='Rare'
                    value={breedDetail[0]?.rare}
                  />
                )}
                {breedDetail[0]?.rex && (
                  <BreedCharacteristics
                    title='Rex'
                    value={breedDetail[0]?.rex}
                  />
                )}
                {breedDetail[0]?.shedding_level && (
                  <BreedCharacteristics
                    title='Shedding Level'
                    value={breedDetail[0]?.shedding_level}
                  />
                )}
                {breedDetail[0]?.social_needs && (
                  <BreedCharacteristics
                    title='Social Needs'
                    value={breedDetail[0]?.social_needs}
                  />
                )}
                {breedDetail[0]?.suppressed_tail && (
                  <BreedCharacteristics
                    title='Suppressed tail'
                    value={breedDetail[0]?.suppressed_tail}
                  />
                )}
                {breedDetail[0]?.stranger_friendly && (
                  <BreedCharacteristics
                    title='Stranger Friendly'
                    value={breedDetail[0]?.stranger_friendly}
                  />
                )}
                {breedDetail[0]?.vocalisation && (
                  <BreedCharacteristics
                    title='Vocalisation'
                    value={breedDetail[0]?.vocalisation}
                  />
                )}
                {breedDetail[0]?.suppressed_tail && (
                  <BreedCharacteristics
                    title='Suppressed Tail'
                    value={breedDetail[0]?.suppressed_tail}
                  />
                )}
                {breedDetail[0]?.short_legs && (
                  <BreedCharacteristics
                    title='Short Legs'
                    value={breedDetail[0]?.short_legs}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
