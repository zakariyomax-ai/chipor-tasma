import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { SCRIBD_PDF_URL } from '../data/storyData';

interface NavbarProps {
  onStartQuiz: (mode: 'main' | 'pdf') => void;
}

export function Navbar({ onStartQuiz }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleQuizJump = (mode: 'main' | 'pdf') => {
    setMobileOpen(false);
    onStartQuiz(mode);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-[#FAFAFA] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
        >
          Chipor Tasma
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Asosiy navigatsiya"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          <a
            href="#asar"
            className="hover:text-[#FAFAFA] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Asar haqida
          </a>
          <button
            type="button"
            onClick={() => handleQuizJump('main')}
            className="hover:text-[#FAFAFA] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            20 talik test
          </button>
          <button
            type="button"
            onClick={() => handleQuizJump('pdf')}
            className="hover:text-[#FAFAFA] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            25 talik PDF test
          </button>
          <a
            href="#muallif"
            className="hover:text-[#FAFAFA] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Kitob muallifi
          </a>
          <a
            href={SCRIBD_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#FBBF24] hover:text-[#FCD34D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Kitob PDF si</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleQuizJump('main')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
          >
            Testni boshlash
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#27272A] text-[#F4F4F5] hover:bg-[#18181B] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#27272A] bg-[#09090B] px-4 py-4 space-y-2">
          <a
            href="#asar"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#F4F4F5] hover:bg-[#18181B]"
          >
            Asar haqida
          </a>
          <button
            type="button"
            onClick={() => handleQuizJump('main')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#F4F4F5] hover:bg-[#18181B] cursor-pointer"
          >
            20 talik test
          </button>
          <button
            type="button"
            onClick={() => handleQuizJump('pdf')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#F4F4F5] hover:bg-[#18181B] cursor-pointer"
          >
            25 talik PDF test
          </button>
          <a
            href="#muallif"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#F4F4F5] hover:bg-[#18181B]"
          >
            Kitob muallifi
          </a>
          <a
            href={SCRIBD_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#FBBF24] hover:bg-[#18181B]"
          >
            <span>Kitob PDF si (Scribd)</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => handleQuizJump('main')}
            className="w-full mt-2 px-4 py-2.5 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold text-center cursor-pointer"
          >
            Testni boshlash
          </button>
        </div>
      )}
    </header>
  );
}
