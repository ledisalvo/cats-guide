import React from 'react';

export default function ApiDocumentation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Quick Start</h2>
      <div className="flex flex-col gap-4">
        <div className="bg-surface border border-border rounded-2xl p-4">
          <p className="font-body text-sm text-muted mb-2">Obtener una imagen aleatoria</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.thecatapi.com/v1/images/search"
            className="font-body text-xs text-amber break-all no-underline hover:underline"
          >
            https://api.thecatapi.com/v1/images/search
          </a>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-4">
          <p className="font-body text-sm text-muted mb-2">Obtener 10 imágenes aleatorias</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.thecatapi.com/v1/images/search?limit=10"
            className="font-body text-xs text-amber break-all no-underline hover:underline"
          >
            https://api.thecatapi.com/v1/images/search?limit=10
          </a>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-4">
          <p className="font-body text-sm text-muted mb-2">
            10 imágenes de raza Bengal (requiere API Key)
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
            className="font-body text-xs text-amber break-all no-underline hover:underline"
          >
            https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
          </a>
        </div>
      </div>
      <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
        Más información
      </h2>
      <div className="bg-surface border border-border rounded-2xl p-4">
        <p className="font-body text-sm text-muted">
          Para más información consultá{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://developers.thecatapi.com"
            className="text-amber hover:underline"
          >
            la documentación oficial
          </a>
        </p>
      </div>
    </div>
  );
}
