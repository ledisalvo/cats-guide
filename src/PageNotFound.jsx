import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className='page-404'>
      <div className='outer'>
        <div className='middle'>
          <div className='inner'>
            <div className='inner-circle'>
              <i className='fa fa-home'></i>
              <span>404</span>
            </div>
            <span className='inner-detail'>
              <span className='inner-status'>Oops! You're lost</span>
              We can not find the page you're looking for.
              <div>
                <Link to='/App' className='btn btn-info mtl mt-2'>
                  <i className='fa fa-home'></i>&nbsp; Return home
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
