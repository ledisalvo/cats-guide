import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const activeLinks = ({ isActive }) =>
  isActive
    ? {
        color: '#fff',
        background: '#7600dc',
      }
    : { color: '#545e6f', background: '#f0f0f0' };

export default function Header() {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <Link
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          <span className='fs-4'>Cat's catalog breeds</span>
        </Link>

        <ul className='nav nav-pills'>
          <li className='nav-item vertical-centered-li'>
            <NavLink style={activeLinks} to='/'>
              View the Cat of the day
            </NavLink>
          </li>
          <li className='nav-item vertical-centered-li'>
            <NavLink style={activeLinks} to='/App/'>
              List of cat breeds
            </NavLink>
          </li>
          <li className='nav-item vertical-centered-li'>
            <NavLink style={activeLinks} to='apidoc'>
              Api Documentation
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
