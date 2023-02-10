import React from 'react';

export default function ApiDocumentation() {
  return (
    <div className='container'>
      <h2>Quick start</h2>
      <div className='row mt-3'>
        <p>
          Click on this to get a random Image{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://api.thecatapi.com/v1/images/search'
          >
            https://api.thecatapi.com/v1/images/search
          </a>
        </p>
      </div>
      <div className='row mt-3'>
        <p>
          Click this to get 10 random images{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://api.thecatapi.com/v1/images/search?limit=10'
          >
            https://api.thecatapi.com/v1/images/search?limit=10
          </a>
        </p>
      </div>
      <div className='row mt-3'>
        <p>
          Copy this link, add your own API Key to get 10 bengal images{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'
          >
            https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
          </a>
        </p>
      </div>
      <h2>More information</h2>
      <div className='row mt-3'>
        <p>
          For more information please refer{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://developers.thecatapi.com'
          >
            this link
          </a>
        </p>
      </div>
    </div>
  );
}
