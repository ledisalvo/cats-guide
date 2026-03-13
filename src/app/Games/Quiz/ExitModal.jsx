import React from 'react';

const ExitModal = ({ onConfirm, onCancel }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center px-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
  >
    <div className="bg-surface border border-border rounded-2xl p-6 max-w-xs w-full flex flex-col gap-5 text-center">
      <div>
        <p className="font-heading text-base font-bold text-foreground mb-1">
          ¿Abandonar la partida?
        </p>
        <p className="font-body text-sm text-muted">El progreso no se guardará.</p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={onConfirm}
          className="w-full font-heading text-sm font-bold py-3 rounded-xl cursor-pointer border-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
        >
          Abandonar
        </button>
        <button
          onClick={onCancel}
          className="w-full font-body text-sm py-3 rounded-xl cursor-pointer transition-colors"
          style={{ backgroundColor: '#1A1A24', border: '1px solid #2E2E3E', color: '#8B8B9E' }}
        >
          Seguir jugando
        </button>
      </div>
    </div>
  </div>
);

export default ExitModal;
