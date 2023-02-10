import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const activeLinks = ({ isActive }) =>
  isActive
    ? {
        color: '#fff',
        background: '#bcbcbc',
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
          <span className='title'>Cat's catalog breeds</span>
        </Link>

        <ul className='nav nav-pills link'>
          <li className='nav-item vertical-centered-li'>
            <NavLink style={activeLinks} to='/'>
              Get a random cat
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
