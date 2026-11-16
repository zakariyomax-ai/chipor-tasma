import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryExplorer } from './components/StoryExplorer';
import { QuizMode, QuizWorkbench } from './components/QuizWorkbench';
import { AuthorSection } from './components/AuthorSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeQuizMode, setActiveQuizMode] = useState<QuizMode>('main');

  const handleStartQuiz = (mode: QuizMode) => {
    setActiveQuizMode(mode);
    const el = document.getElementById('testlar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-[#F4F4F5]">
      <Navbar onStartQuiz={handleStartQuiz} />
      <main className="flex-1">
        <HeroSection onStartQuiz={handleStartQuiz} />
        <StoryExplorer />
        <QuizWorkbench activeMode={activeQuizMode} onModeChange={setActiveQuizMode} />
        <AuthorSection />
      </main>
      <Footer onStartQuiz={handleStartQuiz} />
    </div>
  );
}
