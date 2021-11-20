import React from 'react';
import './Welcome.css';
import Spinner from './Spinner';
import useFetch from './services/useFetch';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

export default function Welcome() {
  const { data: cat, error, notFound } = useFetch('images/search');

  if (error) throw error;
  if (notFound) return <PageNotFound />;
  return (
    <div className='Welcome'>
      <h1>Welcome to Cat's catalog breeds</h1>
      <p>This is the Cat of the day...</p>
      {cat && cat.length > 0 ? (
        <img src={cat[0].url} className='Welcome-img' alt={cat[0].id} />
      ) : (
        <span>
          <h3> Wait for it...</h3>
          <Spinner />
        </span>
      )}
      <Link to='/App/' className='btn btn-primary mt-3'>
        View all cat breeds
      </Link>
    </div>
  );
}
