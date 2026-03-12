import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-surface border-b border-border px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 no-underline">
        <span className="text-lg">🐾</span>
        <span className="font-heading text-xs font-bold tracking-widest text-muted uppercase">
          Cats Guide
        </span>
      </Link>
      <ul className="flex items-center gap-1 list-none m-0 p-0">
        <li>
          <NavLink
            to="/App/"
            end
            className={({ isActive }) =>
              `font-body text-sm px-3 py-1.5 rounded-lg transition-colors no-underline ${
                isActive ? 'text-amber' : 'text-muted hover:text-foreground'
              }`
            }
          >
            Razas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/App/apidoc"
            className={({ isActive }) =>
              `font-body text-sm px-3 py-1.5 rounded-lg transition-colors no-underline ${
                isActive ? 'text-mint' : 'text-muted hover:text-foreground'
              }`
            }
          >
            API Docs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
