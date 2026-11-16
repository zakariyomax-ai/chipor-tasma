import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { MAIN_TEST_QUESTIONS, PDF_TEST_QUESTIONS, QuizQuestion } from '../data/quizData';
import { SCRIBD_PDF_URL } from '../data/storyData';

export type QuizMode = 'main' | 'pdf';
type StudyStyle = 'instant' | 'exam';
type ReviewFilter = 'all' | 'wrong';

interface QuizState {
  currentIndex: number;
  answers: Record<number, number>;
  submitted: boolean;
  elapsedSeconds: number;
}

const createInitialQuizState = (): QuizState => ({
  currentIndex: 0,
  answers: {},
  submitted: false,
  elapsedSeconds: 0,
});

interface QuizWorkbenchProps {
  activeMode: QuizMode;
  onModeChange: (mode: QuizMode) => void;
}

function formatTime(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function QuizWorkbench({ activeMode, onModeChange }: QuizWorkbenchProps) {
  const [studyStyle, setStudyStyle] = useState<StudyStyle>('instant');
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const [quizStates, setQuizStates] = useState<Record<QuizMode, QuizState>>({
    main: createInitialQuizState(),
    pdf: createInitialQuizState(),
  });

  const questions: QuizQuestion[] =
    activeMode === 'main' ? MAIN_TEST_QUESTIONS : PDF_TEST_QUESTIONS;
  const currentQuiz = quizStates[activeMode];
  const currentQuestion = questions[currentQuiz.currentIndex];

  useEffect(() => {
    if (currentQuiz.submitted) return;
    const timer = window.setInterval(() => {
      setQuizStates((prev) => {
        const target = prev[activeMode];
        if (target.submitted) return prev;
        return {
          ...prev,
          [activeMode]: {
            ...target,
            elapsedSeconds: target.elapsedSeconds + 1,
          },
        };
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [activeMode, currentQuiz.submitted]);

  const answeredCount = Object.keys(currentQuiz.answers).length;
  const correctCount = questions.reduce((acc, q) => {
    return currentQuiz.answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);
  const accuracyPercent = Math.round((correctCount / questions.length) * 100);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (currentQuiz.submitted) return;
    if (studyStyle === 'instant' && currentQuiz.answers[questionId] !== undefined) {
      return;
    }

    setQuizStates((prev) => ({
      ...prev,
      [activeMode]: {
        ...prev[activeMode],
        answers: {
          ...prev[activeMode].answers,
          [questionId]: optionIndex,
        },
      },
    }));
  };

  const handleGoToQuestion = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    setQuizStates((prev) => ({
      ...prev,
      [activeMode]: {
        ...prev[activeMode],
        currentIndex: index,
      },
    }));
  };

  const handleSubmitQuiz = () => {
    setReviewFilter('all');
    setQuizStates((prev) => ({
      ...prev,
      [activeMode]: {
        ...prev[activeMode],
        submitted: true,
      },
    }));
  };

  const handleResetQuiz = () => {
    setReviewFilter('all');
    setQuizStates((prev) => ({
      ...prev,
      [activeMode]: createInitialQuizState(),
    }));
  };

  const selectedOption = currentQuiz.answers[currentQuestion.id];
  const isAnswered = selectedOption !== undefined;
  const showInstantFeedback = studyStyle === 'instant' && isAnswered;

  const getVerdict = (percent: number) => {
    if (percent >= 90) {
      return {
        label: 'A’lo natija — Sherlok Xolms darajasidagi kuzatuvchanlik',
        detail:
          'Siz asarning eng nozik tafsilotlari va mantiqiy bog‘lanishlarini mukammal o‘zlashtirgansiz.',
      };
    }
    if (percent >= 70) {
      return {
        label: 'Yaxshi natija — Ishonchli tergovchi',
        detail:
          'Asarning asosiy voqealari va dalillari sizga yaxshi tanish. Qolgan xatolarni izohlar orqali ko‘rib chiqing.',
      };
    }
    if (percent >= 50) {
      return {
        label: 'Qoniqarli natija — Boshlang‘ich tahlil',
        detail:
          'Asosiy syujetni bilasiz, biroq mayda dalillar va muallif ma’lumotlarini yana bir bor ko‘zdan kechirish foydali bo‘ladi.',
      };
    }
    return {
      label: 'Takrorlash tavsiya etiladi',
      detail:
        'Yuqoridagi «Asar haqida» bo‘limi va «Kitob PDF si» bilan tanishib, testni qayta topshirib ko‘ring.',
    };
  };

  const reviewQuestions =
    reviewFilter === 'wrong'
      ? questions.filter((q) => currentQuiz.answers[q.id] !== q.correctIndex)
      : questions;

  return (
    <section id="testlar" className="py-16 border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Mode Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#A1A1AA]">
              Interaktiv bilim tekshiruvi
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#FAFAFA] text-balance">
              Testlar markazi: 20 talik va 25 talik PDF to‘plami
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Segmented Switch between 20-question and 25-question tests */}
            <div
              role="tablist"
              aria-label="Test turini tanlash"
              className="inline-flex items-center p-1 rounded-lg bg-[#131316] border border-[#27272A]"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === 'main'}
                onClick={() => onModeChange('main')}
                className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeMode === 'main'
                    ? 'bg-[#27272A] text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                «Chipor tasma» (20 ta)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === 'pdf'}
                onClick={() => onModeChange('pdf')}
                className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeMode === 'pdf'
                    ? 'bg-[#27272A] text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                PDF asosida (25 ta)
              </button>
            </div>

            {/* Direct Kitob PDF si Link */}
            <a
              href={SCRIBD_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#F59E0B]/40 bg-[#141418] text-[#FBBF24] text-xs sm:text-sm font-medium hover:bg-[#1F1A12] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Kitob PDF si</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Context Banner for Active Test */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#131316] border border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-[#FAFAFA]">
              {activeMode === 'main'
                ? '1-test to‘plami: «Chipor tasma» hikoyasi bo‘yicha 20 ta savol'
                : '2-test to‘plami: «Kitob PDF si» va kengaytirilgan adabiy tahlil bo‘yicha 25 ta savol'}
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">
              {activeMode === 'main'
                ? 'Asar syujeti, qahramonlar, Stok-Moran dalillari va tergov kulminatsiyasi yuzasidan test.'
                : 'Scribd PDF hujjati bilan birga o‘qiladigan matn tafsilotlari, deduksiya va muallif merosi bo‘yicha chuqurlashtirilgan test.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {!currentQuiz.submitted && (
              <div className="inline-flex items-center p-1 rounded-lg bg-[#09090B] border border-[#27272A]">
                <button
                  type="button"
                  onClick={() => setStudyStyle('instant')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    studyStyle === 'instant'
                      ? 'bg-[#F59E0B] text-[#09090B] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                  }`}
                >
                  Darhol izoh
                </button>
                <button
                  type="button"
                  onClick={() => setStudyStyle('exam')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    studyStyle === 'exam'
                      ? 'bg-[#F59E0B] text-[#09090B] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                  }`}
                >
                  Imtihon rejimi
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 font-mono text-sm text-[#F4F4F5] tabular-nums">
              <Clock className="w-4 h-4 text-[#A1A1AA]" aria-hidden="true" />
              <span>{formatTime(currentQuiz.elapsedSeconds)}</span>
            </div>
          </div>
        </div>

        {/* Main Quiz Body OR Results View */}
        {!currentQuiz.submitted ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Active Question Card */}
            <div className="lg:col-span-8 bg-[#131316] rounded-xl border border-[#27272A] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#27272A]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#A1A1AA]">
                  <span className="font-mono font-semibold text-[#FBBF24] tabular-nums">
                    Savol {currentQuiz.currentIndex + 1} / {questions.length}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{currentQuestion.category}</span>
                </div>

                <div className="text-xs font-mono text-[#A1A1AA] tabular-nums">
                  Javob berildi: {answeredCount} / {questions.length}
                </div>
              </div>

              {/* Thin Progress Bar */}
              <div className="mt-4 h-1.5 w-full bg-[#27272A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F59E0B] transition-all duration-200"
                  style={{
                    width: `${((currentQuiz.currentIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 className="mt-6 font-serif text-xl sm:text-2xl font-semibold text-[#FAFAFA] leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Answer Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((optionText, optIdx) => {
                  const isChosen = selectedOption === optIdx;
                  const isCorrectOption = currentQuestion.correctIndex === optIdx;
                  const letter = ['A', 'B', 'C', 'D'][optIdx];

                  let containerClasses =
                    'border-[#27272A] bg-[#09090B] text-[#F4F4F5] hover:bg-[#18181B] hover:border-[#3F3F46]';
                  let statusLabel: string | null = null;

                  if (showInstantFeedback) {
                    if (isCorrectOption) {
                      containerClasses =
                        'border-[#10B981] bg-[#10B981]/12 text-[#6EE7B7]';
                      statusLabel = 'To‘g‘ri javob';
                    } else if (isChosen && !isCorrectOption) {
                      containerClasses =
                        'border-[#EF4444] bg-[#EF4444]/12 text-[#FCA5A5]';
                      statusLabel = 'Noto‘g‘ri';
                    } else {
                      containerClasses = 'border-[#27272A] bg-[#09090B]/60 text-[#71717A]';
                    }
                  } else if (isChosen) {
                    containerClasses = 'border-[#F59E0B] bg-[#F59E0B] text-[#09090B] font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                      disabled={showInstantFeedback}
                      className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start justify-between gap-4 min-h-[52px] ${
                        showInstantFeedback ? 'cursor-default' : 'cursor-pointer'
                      } ${containerClasses}`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`font-mono text-xs font-semibold px-2 py-0.5 rounded border mt-0.5 shrink-0 ${
                            isChosen && !showInstantFeedback
                              ? 'border-[#09090B]/30 text-[#09090B]'
                              : 'border-current/25'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">{optionText}</span>
                      </div>

                      {statusLabel && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold shrink-0 mt-0.5">
                          {isCorrectOption ? (
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                          ) : (
                            <XCircle className="w-4 h-4" aria-hidden="true" />
                          )}
                          <span>{statusLabel}</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box */}
              {showInstantFeedback && (
                <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#18181B] border border-[#27272A]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                    Izoh va tahlil
                  </div>
                  <p className="mt-1.5 text-sm text-[#E4E4E7] leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Bottom Question Controls */}
              <div className="mt-8 pt-6 border-t border-[#27272A] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleGoToQuestion(currentQuiz.currentIndex - 1)}
                  disabled={currentQuiz.currentIndex === 0}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#27272A] bg-[#09090B] text-sm font-medium text-[#F4F4F5] hover:bg-[#18181B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Oldingi</span>
                </button>

                <div className="flex items-center gap-3">
                  {currentQuiz.currentIndex < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => handleGoToQuestion(currentQuiz.currentIndex + 1)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Keyingi savol</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmitQuiz}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10B981] text-[#09090B] text-sm font-semibold hover:bg-[#34D399] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Yakunlash va natijani ko‘rish</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Question Navigator Sidebar */}
            <aside className="lg:col-span-4 bg-[#131316] rounded-xl border border-[#27272A] p-6 space-y-6">
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#FAFAFA]">
                  Savollar xaritasi
                </h4>
                <p className="mt-1 text-xs text-[#A1A1AA]">
                  Istalgan savol raqamini bosib tezkor o‘tishingiz mumkin.
                </p>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const ans = currentQuiz.answers[q.id];
                    const isCurr = idx === currentQuiz.currentIndex;
                    const isCorrect = ans !== undefined && ans === q.correctIndex;
                    const isWrong = ans !== undefined && ans !== q.correctIndex;

                    let btnStyle =
                      'bg-[#09090B] border-[#27272A] text-[#D4D4D8] hover:border-[#52525B]';

                    if (ans !== undefined) {
                      if (studyStyle === 'instant') {
                        btnStyle = isCorrect
                          ? 'bg-[#059669] border-[#10B981] text-white'
                          : 'bg-[#DC2626] border-[#EF4444] text-white';
                      } else {
                        btnStyle = 'bg-[#E4E4E7] border-[#FAFAFA] text-[#09090B]';
                      }
                    }

                    if (isCurr) {
                      btnStyle += ' ring-2 ring-[#F59E0B] ring-offset-2 ring-offset-[#131316]';
                    }

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleGoToQuestion(idx)}
                        aria-label={`${idx + 1}-savol${
                          isWrong ? ' (noto‘g‘ri)' : isCorrect ? ' (to‘g‘ri)' : ''
                        }`}
                        className={`h-10 rounded-lg border font-mono text-xs font-semibold tabular-nums transition-all cursor-pointer ${btnStyle}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#27272A] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                  <span>Belgilangan savollar</span>
                  <span className="font-mono font-semibold text-[#FAFAFA] tabular-nums">
                    {answeredCount} / {questions.length}
                  </span>
                </div>
                {studyStyle === 'instant' && (
                  <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                    <span>Joriy to‘g‘ri javoblar</span>
                    <span className="font-mono font-semibold text-[#34D399] tabular-nums">
                      {correctCount} ta
                    </span>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors cursor-pointer"
                  >
                    Testni yakunlash
                  </button>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="w-full py-2.5 px-4 rounded-lg border border-[#27272A] bg-[#09090B] text-[#D4D4D8] text-sm font-medium hover:bg-[#18181B] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Qaytadan boshlash</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* Submitted Results & Detailed Review Screen */
          <div className="mt-8 space-y-8">
            <div className="bg-[#131316] rounded-xl border border-[#27272A] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#34D399]">
                    Test yakunlandi ·{' '}
                    {activeMode === 'main' ? '20 talik asosiy test' : '25 talik PDF testi'}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAFA]">
                    {getVerdict(accuracyPercent).label}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {getVerdict(accuracyPercent).detail}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetQuiz}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>Testni qayta topshirish</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onModeChange(activeMode === 'main' ? 'pdf' : 'main')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#27272A] bg-[#18181B] text-[#F4F4F5] text-sm font-medium hover:bg-[#27272A] transition-colors cursor-pointer"
                    >
                      <span>
                        {activeMode === 'main'
                          ? '25 talik PDF testga o‘tish'
                          : '20 talik asosiy testga o‘tish'}
                      </span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-3 border border-[#27272A] rounded-xl bg-[#09090B] divide-x divide-[#27272A]">
                  <div className="p-4 text-center">
                    <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#34D399] tabular-nums">
                      {correctCount}/{questions.length}
                    </div>
                    <div className="mt-1 text-xs text-[#A1A1AA]">To‘g‘ri javob</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tabular-nums">
                      {accuracyPercent}%
                    </div>
                    <div className="mt-1 text-xs text-[#A1A1AA]">Aniqlik</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tabular-nums">
                      {formatTime(currentQuiz.elapsedSeconds)}
                    </div>
                    <div className="mt-1 text-xs text-[#A1A1AA]">Sarflangan vaqt</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Review List */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <h4 className="font-serif text-2xl font-semibold text-[#FAFAFA]">
                  Javoblar tahlili
                </h4>

                <div className="inline-flex items-center p-1 rounded-lg bg-[#131316] border border-[#27272A] self-start">
                  <button
                    type="button"
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      reviewFilter === 'all'
                        ? 'bg-[#27272A] text-[#FAFAFA]'
                        : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    Barchasi ({questions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('wrong')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      reviewFilter === 'wrong'
                        ? 'bg-[#27272A] text-[#FAFAFA]'
                        : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    Xato yoki belgilanmagan ({questions.length - correctCount})
                  </button>
                </div>
              </div>

              {reviewQuestions.length === 0 ? (
                <div className="p-8 rounded-xl bg-[#131316] border border-[#27272A] text-center text-sm text-[#34D399] font-medium">
                  Birorta ham xato topilmadi — barcha savollarga to‘g‘ri javob berdingiz!
                </div>
              ) : (
                <div className="space-y-4">
                  {reviewQuestions.map((q) => {
                    const userAns = currentQuiz.answers[q.id];
                    const isCorrect = userAns === q.correctIndex;
                    const qNumber = questions.findIndex((item) => item.id === q.id) + 1;

                    return (
                      <article
                        key={q.id}
                        className="p-5 sm:p-6 rounded-xl bg-[#131316] border border-[#27272A]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="text-xs font-mono text-[#A1A1AA] tabular-nums">
                            {qNumber}-savol · {q.category}
                          </div>
                          <div
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                              isCorrect ? 'text-[#34D399]' : 'text-[#FCA5A5]'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                <span>To‘g‘ri</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4" aria-hidden="true" />
                                <span>
                                  {userAns === undefined ? 'Javob belgilanmagan' : 'Noto‘g‘ri'}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <h5 className="mt-2 font-serif text-lg font-semibold text-[#FAFAFA]">
                          {q.question}
                        </h5>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="p-3 rounded-lg bg-[#09090B] border border-[#27272A]">
                            <span className="text-xs text-[#A1A1AA] block">Sizning javobingiz</span>
                            <span className="font-medium text-[#F4F4F5]">
                              {userAns !== undefined ? q.options[userAns] : 'Tanlanmagan'}
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30">
                            <span className="text-xs text-[#34D399] block">To‘g‘ri javob</span>
                            <span className="font-medium text-[#6EE7B7]">
                              {q.options[q.correctIndex]}
                            </span>
                          </div>
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                          <span className="font-semibold text-[#FAFAFA]">Izoh: </span>
                          {q.explanation}
                        </p>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
