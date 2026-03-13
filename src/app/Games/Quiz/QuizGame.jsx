import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useQuizStore from './useQuizStore';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import ExitModal from './ExitModal';

const QuizGame = () => {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const [showExitModal, setShowExitModal] = useState(false);

  const {
    phase, questions, currentIndex, score, maxStreak,
    selectedAnswer, isCorrect, timeLeft, timerActive,
    startGame, selectAnswer, nextQuestion, resetGame, tickTimer,
  } = useQuizStore();

  useEffect(() => {
    startGame(difficulty);
    return () => resetGame();
  }, [difficulty]); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer tick
  useEffect(() => {
    if (!timerActive) return;
    const id = setInterval(tickTimer, 1000);
    return () => clearInterval(id);
  }, [timerActive, tickTimer]);

  // Block browser back button (React Router v6.0 — no useBlocker available)
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handler = () => {
      window.history.pushState(null, '', window.location.href);
      setShowExitModal(true);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  if (phase === 'idle' || phase === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-sm text-muted animate-pulse">Cargando preguntas...</p>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <QuizResult
        score={score}
        total={questions.length}
        maxStreak={maxStreak}
        difficulty={difficulty}
        onReplay={() => startGame(difficulty)}
        onChangeLevel={() => navigate('/App/juegos/quiz')}
        onHome={() => navigate('/App/juegos')}
      />
    );
  }

  const question = questions[currentIndex];
  const showScore = difficulty !== 'pacifico';
  const showTimer = difficulty === 'dificil';
  const showFunFact = difficulty !== 'dificil';

  return (
    <div className="min-h-screen bg-background">
      {showExitModal && (
        <ExitModal
          onConfirm={() => navigate('/App/juegos')}
          onCancel={() => setShowExitModal(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <button
          onClick={() => setShowExitModal(true)}
          className="font-body text-sm text-muted hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer p-0"
        >
          ✕
        </button>
        <span className="font-body text-sm text-muted">
          {currentIndex + 1}/{questions.length}
        </span>
        {showScore ? (
          <span className="font-heading text-sm font-bold text-amber">{score} pts</span>
        ) : (
          <span className="w-10" />
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-border">
        <div
          className="h-full bg-amber transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Timer */}
      {showTimer && phase === 'playing' && (
        <div className="flex justify-center pt-3">
          <span
            className="font-heading text-2xl font-bold"
            style={{ color: timeLeft <= 10 ? '#FF6B6B' : '#F59E0B' }}
          >
            {timeLeft}s
          </span>
        </div>
      )}

      <QuizQuestion
        question={question}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        phase={phase}
        showFunFact={showFunFact}
        onSelect={selectAnswer}
        onNext={nextQuestion}
      />
    </div>
  );
};

export default QuizGame;
