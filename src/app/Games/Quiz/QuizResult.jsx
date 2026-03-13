import React, { useEffect } from 'react';

const MESSAGES = [
  { min: 9, text: 'Experto felino. Impresionante.' },
  { min: 7, text: 'Muy bien jugado.' },
  { min: 5, text: 'Buen intento.' },
  { min: 3, text: 'Vas aprendiendo.' },
  { min: 0, text: 'Los gatos te perdonan. Por ahora.' },
];

function saveStats(score, maxStreak, difficulty) {
  try {
    const raw = localStorage.getItem('cg_quiz_stats');
    const prev = raw ? JSON.parse(raw) : {};
    localStorage.setItem(
      'cg_quiz_stats',
      JSON.stringify({
        bestScore: Math.max(prev.bestScore ?? 0, score),
        bestStreak: Math.max(prev.bestStreak ?? 0, maxStreak),
        gamesPlayed: (prev.gamesPlayed ?? 0) + 1,
        lastDifficulty: difficulty,
      })
    );
  } catch {
    // noop
  }
}

const QuizResult = ({ score, total, maxStreak, difficulty, onReplay, onChangeLevel, onHome }) => {
  useEffect(() => {
    saveStats(score, maxStreak, difficulty);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const message = MESSAGES.find((m) => score >= m.min)?.text ?? MESSAGES.at(-1).text;
  const pct = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center flex flex-col gap-6">
        <div>
          <p className="font-heading text-7xl font-bold text-amber mb-2">
            {score}/{total}
          </p>
          <p className="font-body text-base text-muted">{message}</p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-4 grid grid-cols-3 gap-4">
          <div>
            <p className="font-heading text-xl font-bold text-foreground">{score}</p>
            <p className="font-body text-xs text-muted">Score</p>
          </div>
          <div>
            <p className="font-heading text-xl font-bold text-foreground">{pct}%</p>
            <p className="font-body text-xs text-muted">Precisión</p>
          </div>
          <div>
            <p className="font-heading text-xl font-bold text-foreground">{maxStreak}</p>
            <p className="font-body text-xs text-muted">Racha máx.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onReplay}
            className="w-full font-heading text-sm font-bold py-3 rounded-xl border-0 cursor-pointer transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#F59E0B', color: '#0F0F14' }}
          >
            Jugar de nuevo
          </button>
          <button
            onClick={onChangeLevel}
            className="w-full font-heading text-sm font-bold py-3 rounded-xl cursor-pointer transition-colors"
            style={{ backgroundColor: '#1A1A24', border: '1px solid #2E2E3E', color: '#F2F2F7' }}
          >
            Cambiar nivel
          </button>
          <button
            onClick={onHome}
            className="font-body text-sm text-muted hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
