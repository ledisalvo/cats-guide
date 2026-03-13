import React from 'react';
import { Link } from 'react-router-dom';

const GAMES = [
  {
    id: 'quiz',
    icon: '🧠',
    label: 'Adivina la Raza',
    sublabel: 'Mirá la foto y elegí la raza correcta',
    accentColor: '#F59E0B',
    statsKey: 'cg_quiz_stats',
  },
  {
    id: 'memory',
    icon: '🃏',
    label: 'Encontrá la Pareja',
    sublabel: 'Emparejá las cartas antes de que se acabe el tiempo',
    accentColor: '#34D399',
    statsKey: 'cg_memory_stats',
  },
];

function readStats(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const GameCard = ({ game }) => {
  const stats = readStats(game.statsKey);

  return (
    <div
      className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col"
      style={{ boxShadow: `inset 0 3px 0 0 ${game.accentColor}` }}
    >
      <div className="p-6 flex flex-col gap-4 flex-1">
        <span className="text-4xl" role="img" aria-label={game.label}>
          {game.icon}
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold text-foreground mb-1">{game.label}</h2>
          <p className="font-body text-sm text-muted">{game.sublabel}</p>
        </div>

        <div className="border-t border-border pt-4 mt-auto">
          {stats ? (
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-body text-xs text-muted">Mejor score</p>
                <p className="font-heading text-xl font-bold text-foreground">
                  {stats.bestScore ?? 0}
                </p>
              </div>
              {stats.lastDifficulty && (
                <div className="text-right">
                  <p className="font-body text-xs text-muted">Última dificultad</p>
                  <p className="font-body text-xs text-foreground capitalize">
                    {stats.lastDifficulty}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p className="font-body text-xs text-muted mb-4">Sin partidas aún</p>
          )}

          <Link
            to={`/App/juegos/${game.id}`}
            className="block w-full text-center font-heading text-sm font-bold py-3 rounded-xl no-underline transition-colors"
            style={{
              backgroundColor: `${game.accentColor}20`,
              color: game.accentColor,
              border: `1px solid ${game.accentColor}50`,
            }}
          >
            Jugar →
          </Link>
        </div>
      </div>
    </div>
  );
};

const GameHub = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="font-body text-xs font-semibold text-muted uppercase tracking-widest mb-2">
          Juegos
        </p>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          ¿A qué querés jugar?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameHub;
