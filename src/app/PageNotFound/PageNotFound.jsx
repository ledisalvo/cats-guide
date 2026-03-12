import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="font-heading text-8xl font-bold text-border">404</p>
        <h2 className="font-heading text-2xl font-bold text-foreground mt-4 mb-2">
          Página no encontrada
        </h2>
        <p className="font-body text-sm text-muted mb-6">
          No pudimos encontrar lo que estás buscando.
        </p>
        <Link
          to="/App/"
          className="inline-flex items-center gap-2 bg-surface border border-border text-foreground font-body text-sm px-4 py-2 rounded-xl hover:text-amber transition-colors no-underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
