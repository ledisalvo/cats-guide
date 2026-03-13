import { create } from 'zustand';
import { buildQuizQuestions } from './quizService';

const INITIAL = {
  questions: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  selectedAnswer: null,
  isCorrect: null,
  timeLeft: 60,
  timerActive: false,
  phase: 'idle', // idle | loading | playing | feedback | result
  difficulty: null,
};

const useQuizStore = create((set, get) => ({
  ...INITIAL,

  startGame: async (difficulty) => {
    set({ ...INITIAL, phase: 'loading', difficulty });
    try {
      const questions = await buildQuizQuestions();
      set({ questions, phase: 'playing', timerActive: difficulty === 'dificil', timeLeft: 60 });
    } catch {
      set({ phase: 'idle' });
    }
  },

  selectAnswer: (answer) => {
    const { questions, currentIndex, score, streak, maxStreak } = get();
    const correct = questions[currentIndex].correctAnswer;
    const isCorrect = answer === correct;
    const newStreak = isCorrect ? streak + 1 : 0;
    set({
      selectedAnswer: answer,
      isCorrect,
      score: isCorrect ? score + 1 : score,
      streak: newStreak,
      maxStreak: Math.max(maxStreak, newStreak),
      phase: 'feedback',
      timerActive: false,
    });
  },

  nextQuestion: () => {
    const { currentIndex, questions, difficulty } = get();
    if (currentIndex >= questions.length - 1) {
      set({ phase: 'result' });
    } else {
      set({
        currentIndex: currentIndex + 1,
        selectedAnswer: null,
        isCorrect: null,
        phase: 'playing',
        timerActive: difficulty === 'dificil',
        timeLeft: 60,
      });
    }
  },

  tickTimer: () => {
    const { timeLeft, timerActive, phase } = get();
    if (!timerActive || phase !== 'playing') return;
    if (timeLeft <= 1) {
      get().selectAnswer('__timeout__');
    } else {
      set({ timeLeft: timeLeft - 1 });
    }
  },

  resetGame: () => set(INITIAL),
}));

export default useQuizStore;
