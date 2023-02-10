import React, { useEffect } from 'react';
import './LandingPage.css';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { getRandomImage } from '../api/catBreedsActions';
import { useDispatch, useSelector } from 'react-redux';

const LandingPage = () => {
  const dispatch = useDispatch();
  const cat = useSelector((state) => state.cats.randomCat);

  useEffect(() => {
    dispatch(getRandomImage());
  }, []);

  return (
    <div className='root'>
      <h1>Random Cat!</h1>
      {cat && cat.length >= 0 ? (
        <img src={cat[0]?.url} className='random-img' alt={cat[0]?.id} />
      ) : (
        <span>
          <h3> Wait for it...</h3>
          <Spinner />
        </span>
      )}
      <Link to='/App/' className='btn btn-outline-dark'>
        Explore cat's breeds
      </Link>
    </div>
  );
};

export default LandingPage;
