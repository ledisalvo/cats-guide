import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const GAME_CONFIG = {
  quiz: {
    label: 'Adivina la Raza',
    icon: '🧠',
    accentColor: '#F59E0B',
    statsKey: 'cg_quiz_stats',
    difficulties: [
      { id: 'pacifico', label: 'Pacífico', description: 'Sin límite de tiempo' },
      { id: 'facil', label: 'Fácil', description: '30 segundos por pregunta' },
      { id: 'dificil', label: 'Difícil', description: '10 segundos por pregunta' },
    ],
  },
  memory: {
    label: 'Encontrá la Pareja',
    icon: '🃏',
    accentColor: '#34D399',
    statsKey: 'cg_memory_stats',
    difficulties: [
      { id: 'facil', label: 'Fácil', description: '4×3 cartas · Sin tiempo' },
      { id: 'dificil', label: 'Difícil', description: '6×4 cartas · Contrarreloj' },
    ],
  },
};

function readLastDifficulty(statsKey) {
  try {
    const raw = localStorage.getItem(statsKey);
    return raw ? JSON.parse(raw)?.lastDifficulty ?? null : null;
  } catch {
    return null;
  }
}

function saveLastDifficulty(statsKey, difficulty) {
  try {
    const raw = localStorage.getItem(statsKey);
    const current = raw ? JSON.parse(raw) : {};
    localStorage.setItem(statsKey, JSON.stringify({ ...current, lastDifficulty: difficulty }));
  } catch {
    // noop
  }
}

const DifficultySelector = () => {
  const { game } = useParams();
  const navigate = useNavigate();
  const config = GAME_CONFIG[game];
  const [lastDifficulty, setLastDifficulty] = useState(null);

  useEffect(() => {
    if (config) setLastDifficulty(readLastDifficulty(config.statsKey));
  }, [config]);

  if (!config) {
    navigate('/App/juegos', { replace: true });
    return null;
  }

  function handleSelect(difficultyId) {
    saveLastDifficulty(config.statsKey, difficultyId);
    navigate(`/App/juegos/${game}/${difficultyId}`);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <Link
        to="/App/juegos"
        className="font-body text-xs text-muted hover:text-foreground no-underline transition-colors mb-6 inline-block"
      >
        ← Volver
      </Link>

      <div className="mb-8">
        <span className="text-3xl mb-3 block" role="img" aria-label={config.label}>
          {config.icon}
        </span>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-1">{config.label}</h1>
        <p className="font-body text-sm text-muted">Elegí la dificultad</p>
      </div>

      <div className="flex flex-col gap-3">
        {config.difficulties.map((diff) => {
          const isLast = diff.id === lastDifficulty;
          return (
            <button
              key={diff.id}
              onClick={() => handleSelect(diff.id)}
              className="w-full flex items-center justify-between px-5 rounded-2xl border transition-colors text-left cursor-pointer"
              style={{
                minHeight: 64,
                backgroundColor: isLast ? `${config.accentColor}12` : '#1A1A24',
                borderColor: isLast ? `${config.accentColor}60` : '#2E2E3E',
              }}
            >
              <div>
                <p
                  className="font-heading text-base font-bold"
                  style={{ color: isLast ? config.accentColor : '#F2F2F7' }}
                >
                  {diff.label}
                </p>
                <p className="font-body text-xs text-muted">{diff.description}</p>
              </div>
              {isLast && (
                <span
                  className="font-body text-xs rounded-full px-2 py-0.5 shrink-0"
                  style={{
                    color: config.accentColor,
                    backgroundColor: `${config.accentColor}20`,
                  }}
                >
                  última
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultySelector;
