import { BookOpen, ExternalLink } from 'lucide-react';
import { SCRIBD_PDF_URL } from '../data/storyData';

interface FooterProps {
  onStartQuiz: (mode: 'main' | 'pdf') => void;
}

export function Footer({ onStartQuiz }: FooterProps) {
  return (
    <footer className="bg-[#09090B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PDF Resource Strip */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#131316] border border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#FBBF24]">
              Qo‘shimcha manba
            </p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#FAFAFA]">
              Kitobning PDF nusxasi va 25 talik maxsus test
            </h3>
            <p className="mt-1.5 text-sm text-[#A1A1AA] max-w-2xl">
              Asl PDF hujjatni ko‘rish uchun «Kitob PDF si» tugmasini bosing yoki to‘g‘ridan-to‘g‘ri
              25 savoldan iborat kengaytirilgan testga o‘ting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SCRIBD_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Kitob PDF si</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => onStartQuiz('pdf')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#27272A] bg-[#18181B] text-[#F4F4F5] text-sm font-medium hover:bg-[#27272A] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>25 talik testni ochish</span>
            </button>
          </div>
        </div>

        {/* Quiet Copyright & Navigation Row */}
        <div className="mt-10 pt-6 border-t border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div>
            <span className="font-serif font-semibold text-sm text-[#FAFAFA]">Chipor Tasma</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Ser Artur Konan Doyl asari asosidagi adabiy loyiha</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#asar" className="hover:text-[#FAFAFA] transition-colors">
              Asar haqida
            </a>
            <button
              type="button"
              onClick={() => onStartQuiz('main')}
              className="hover:text-[#FAFAFA] transition-colors cursor-pointer"
            >
              20 talik test
            </button>
            <button
              type="button"
              onClick={() => onStartQuiz('pdf')}
              className="hover:text-[#FAFAFA] transition-colors cursor-pointer"
            >
              25 talik PDF test
            </button>
            <a href="#muallif" className="hover:text-[#FAFAFA] transition-colors">
              Kitob muallifi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
