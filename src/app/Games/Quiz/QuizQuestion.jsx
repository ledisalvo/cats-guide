import React from 'react';

const STYLES = {
  correct: { bg: '#34D39915', border: '#34D399', color: '#34D399' },
  wrong:   { bg: '#FF6B6B15', border: '#FF6B6B', color: '#FF6B6B' },
  default: { bg: '#1A1A24',   border: '#2E2E3E', color: '#F2F2F7' },
};

function getStyle(option, correctAnswer, selectedAnswer, answered) {
  if (!answered) return STYLES.default;
  if (option === correctAnswer) return STYLES.correct;
  if (option === selectedAnswer) return STYLES.wrong;
  return STYLES.default;
}

const QuizQuestion = ({ question, selectedAnswer, isCorrect, phase, showFunFact, onSelect, onNext }) => {
  const answered = phase === 'feedback';

  return (
    <div className="max-w-md mx-auto px-4 pt-4 pb-8 flex flex-col gap-4">
      <div
        className="w-full rounded-2xl overflow-hidden border border-border"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={question.imageUrl}
          alt="¿De qué raza es este gato?"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-heading text-lg font-bold text-foreground text-center">
        ¿De qué raza es este gato?
      </p>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const s = getStyle(option, question.correctAnswer, selectedAnswer, answered);
          return (
            <button
              key={option}
              disabled={answered}
              onClick={() => onSelect(option)}
              className="w-full font-body text-sm font-semibold rounded-xl border transition-colors text-left px-4 cursor-pointer disabled:cursor-default"
              style={{ minHeight: 52, backgroundColor: s.bg, borderColor: s.border, color: s.color }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <p
            className="font-heading text-base font-bold text-center"
            style={{ color: isCorrect ? '#34D399' : '#FF6B6B' }}
          >
            {isCorrect ? '¡Correcto!' : `Era: ${question.correctAnswer}`}
          </p>

          {showFunFact && question.funFact && (
            <div className="bg-surface border border-border rounded-2xl p-4">
              <p className="font-body text-xs text-muted leading-relaxed">{question.funFact}</p>
            </div>
          )}

          <button
            onClick={onNext}
            className="w-full font-heading text-sm font-bold py-3 rounded-xl border-0 cursor-pointer transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#F59E0B', color: '#0F0F14' }}
          >
            Siguiente →
          </button>
        </>
      )}
    </div>
  );
};

export default QuizQuestion;
