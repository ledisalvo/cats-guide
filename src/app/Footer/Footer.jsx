import React from 'react';

export default function Footer() {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='text-muted'>© 2023 Company, Inc</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a
              className='text-muted'
              href='https://twitter.com/PullCommitPush'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </li>
          <li className='ms-3'>
            <a
              className='text-muted'
              href='https://www.instagram.com/leonardo.a.disalvo/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
          <li className='ms-3'>
            <a
              className='text-muted'
              href='https://github.com/ledisalvo'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
