import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import useFetch from './services/useFetch';
import './DetailsBreed.css';
import Spinner from './Spinner';

function BreedCharacteristic(props) {
  const { title, value } = props;
  return (
    <>
      <div className='progress-text'>
        <div className='row'>
          <div className='col-7'>{title}</div>
          <div className='col-5 text-right'>{value}</div>
        </div>
      </div>
      <div className='custom-progress progress'>
        <div
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{
            width: (value * 100) / 5 + '%',
          }}
          className='animated custom-bar progress-bar slideInLeft bg-yellow'
        ></div>
      </div>
    </>
  );
}

export default function DetailsBreed() {
  const { name } = useParams();
  const {
    data: breedDetail,
    error,
    loading,
    notFound,
  } = useFetch('breeds/search?q=' + name);

  if (error) throw error;
  if (notFound) return <PageNotFound />;

  console.log(breedDetail);
  return (
    <>
      {breedDetail && breedDetail.length > 0 ? (
        <div className='container'>
          <div className='team-single'>
            <div className='row'>
              <div className='col-lg-4 col-md-5 xs-margin-30px-bottom'>
                <div className='team-single-img'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt=''
                  />
                </div>
                <div className='bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center'>
                  <h4 className='margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600'>
                    {breedDetail[0].name}
                  </h4>
                  <p className='sm-width-95 sm-margin-auto'>
                    {breedDetail[0].temperament}
                  </p>
                </div>
              </div>

              <div className='col-lg-8 col-md-7'>
                <div className='team-single-text padding-50px-left sm-no-padding-left'>
                  <h4 className='font-size38 sm-font-size32 xs-font-size30'>
                    {breedDetail[0].name}
                  </h4>
                  <p className='no-margin-bottom'>
                    {breedDetail[0].description}
                  </p>
                  <div className='contact-info-section margin-40px-tb'>
                    <ul className='list-style9 no-margin'>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='fas fa-graduation-cap text-orange'></i>
                            <strong className='margin-10px-left text-orange'>
                              Origin:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>{breedDetail[0].origin}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='far fa-gem text-yellow'></i>
                            <strong className='margin-10px-left text-yellow'>
                              Life Span:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>{breedDetail[0].life_span}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='far fa-file text-lightred'></i>
                            <strong className='margin-10px-left text-lightred'>
                              Weight (metric):
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>{breedDetail[0].weight.metric}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='fas fa-map-marker-alt text-green'></i>
                            <strong className='margin-10px-left text-green'>
                              CFA Info:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>
                              <a target='_blank' href={breedDetail[0].cfa_url}>
                                {breedDetail[0].cfa_url}
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='fas fa-map-marker-alt text-green'></i>
                            <strong className='margin-10px-left text-green'>
                              VetStreet Info:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>
                              <a
                                target='_blank'
                                href={breedDetail[0].vetstreet_url}
                              >
                                {breedDetail[0].vetstreet_url}
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='fas fa-map-marker-alt text-green'></i>
                            <strong className='margin-10px-left text-green'>
                              VCA Hospitals Info:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>
                              <a
                                target='_blank'
                                href={breedDetail[0].vcahospitals_url}
                              >
                                {breedDetail[0].vcahospitals_url}
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='row'>
                          <div className='col-md-5 col-5'>
                            <i className='fas fa-map-marker-alt text-green'></i>
                            <strong className='margin-10px-left text-green'>
                              Wikipedia Info:
                            </strong>
                          </div>
                          <div className='col-md-7 col-7'>
                            <p>
                              <a
                                target='_blank'
                                href={breedDetail[0].wikipedia_url}
                              >
                                {breedDetail[0].wikipedia_url}
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h5 className='font-size24 sm-font-size22 xs-font-size20'>
                    Characteristics
                  </h5>

                  <div className='sm-no-margin'>
                    <BreedCharacteristic
                      title='Indoor'
                      value={breedDetail[0].indoor}
                    />
                    <BreedCharacteristic
                      title='Lap'
                      value={breedDetail[0].lap}
                    />
                    <BreedCharacteristic
                      title='Adaptability'
                      value={breedDetail[0].adaptability}
                    />
                    <BreedCharacteristic
                      title='Affection Level'
                      value={breedDetail[0].affection_level}
                    />
                    <BreedCharacteristic
                      title='Child Friendly'
                      value={breedDetail[0].child_friendly}
                    />
                    <BreedCharacteristic
                      title='Dog Friendly'
                      value={breedDetail[0].dog_friendly}
                    />
                    <BreedCharacteristic
                      title='Energy Level'
                      value={breedDetail[0].energy_level}
                    />
                    <BreedCharacteristic
                      title='Grooming'
                      value={breedDetail[0].grooming}
                    />
                    <BreedCharacteristic
                      title='Health Issues'
                      value={breedDetail[0].health_issues}
                    />
                    <BreedCharacteristic
                      title='Intelligence'
                      value={breedDetail[0].intelligence}
                    />
                    <BreedCharacteristic
                      title='Shedding Level'
                      value={breedDetail[0].shedding_level}
                    />
                    <BreedCharacteristic
                      title='Social Needs'
                      value={breedDetail[0].social_needs}
                    />
                    <BreedCharacteristic
                      title='Stranger Friendly'
                      value={breedDetail[0].stranger_friendly}
                    />
                    <BreedCharacteristic
                      title='Vocalisation'
                      value={breedDetail[0].vocalisation}
                    />
                    <BreedCharacteristic
                      title='Experimental'
                      value={breedDetail[0].experimental}
                    />
                    <BreedCharacteristic
                      title='Hairless'
                      value={breedDetail[0].hairless}
                    />
                    <BreedCharacteristic
                      title='Natural'
                      value={breedDetail[0].natural}
                    />
                    <BreedCharacteristic
                      title='Rare'
                      value={breedDetail[0].rare}
                    />
                    <BreedCharacteristic
                      title='Rex'
                      value={breedDetail[0].rex}
                    />
                    <BreedCharacteristic
                      title='Suppressed Tail'
                      value={breedDetail[0].suppressed_tail}
                    />
                    <BreedCharacteristic
                      title='Short Legs'
                      value={breedDetail[0].short_legs}
                    />
                    <BreedCharacteristic
                      title='Hypoallergenic'
                      value={breedDetail[0].hypoallergenic}
                    />
                  </div>
                </div>
              </div>

              <div className='col-md-12'></div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
