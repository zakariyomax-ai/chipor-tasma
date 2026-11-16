import { useState } from 'react';
import { ArrowRight, BookOpen, ExternalLink, FileText, ShieldAlert } from 'lucide-react';
import {
  HERO_IMAGE_URL,
  HERO_MANOR_UPLOAD_URL,
  SCRIBD_PDF_URL,
} from '../data/storyData';

interface HeroSectionProps {
  onStartQuiz: (mode: 'main' | 'pdf') => void;
}

export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const [manorImgError, setManorImgError] = useState(false);

  return (
    <section id="top" className="pt-10 pb-14 sm:pt-14 sm:pb-16 border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#A1A1AA]">
                <span>Ser Artur Konan Doyl</span>
                <span aria-hidden="true">·</span>
                <span>1892-yil</span>
                <span aria-hidden="true">·</span>
                <span>Detektiv hikoya</span>
              </div>

              <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#FAFAFA] leading-[1.12] text-balance">
                Chipor tasma: Sirli jinoyat va deduksiya maktabi
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#D4D4D8] leading-relaxed max-w-xl">
                Sherlok Xolms sarguzashtlari turkumidagi eng mashhur asarlardan biri — «Chipor tasma»
                hikoyasi bo‘yicha to‘liq tahlil, dalillar xaritasi, muallif ensiklopediyasi hamda
                45 savoldan iborat zamonaviy interaktiv testlar to‘plami.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onStartQuiz('main')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F59E0B] text-[#09090B] text-sm font-semibold hover:bg-[#FBBF24] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <span>20 talik testni boshlash</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onStartQuiz('pdf')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#27272A] bg-[#18181B] text-[#F4F4F5] text-sm font-medium hover:bg-[#27272A] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <FileText className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
                  <span>25 talik PDF test</span>
                </button>

                <a
                  href={SCRIBD_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-[#F59E0B]/40 bg-[#141418] text-[#FBBF24] text-sm font-medium hover:bg-[#1F1A12] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <span>Kitob PDF si</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#27272A] text-sm text-[#A1A1AA]">
              <p className="italic font-serif text-[#E4E4E7]">
                «Ko‘rinishidan oddiy tuyulgan har bir detal ortida mantiqiy kalit yashiringan bo‘ladi.»
              </p>
            </div>
          </div>

          {/* Right Media Column: Both Home Page Visuals */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
            <figure className="flex flex-col rounded-xl overflow-hidden border border-[#27272A] bg-[#131316]">
              <div className="relative h-52 sm:h-56 bg-[#18181B]">
                {!imgError ? (
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Beyker-strit 221B izquvarlik stoli: lupa, eski daftar va kerosin chiroq"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#18181B] to-[#09090B] text-[#FAFAFA]">
                    <BookOpen className="w-9 h-9 mb-2 text-[#F59E0B]" aria-hidden="true" />
                    <p className="font-serif text-lg">Chipor Tasma — Tergov Arxivi</p>
                    <p className="mt-1 text-xs text-[#A1A1AA]">Beyker-strit, 221B · London</p>
                  </div>
                )}
              </div>
              <figcaption className="px-4 py-2 text-xs font-serif italic text-[#A1A1AA] bg-[#131316] border-t border-[#27272A]">
                1-rasm · Beyker-strit 221B ish stoli va Stok-Moran ishi hujjatlari
              </figcaption>
            </figure>

            <figure className="flex flex-col rounded-xl overflow-hidden border border-[#27272A] bg-[#131316]">
              <div className="relative h-52 sm:h-56 bg-[#18181B]">
                {!manorImgError ? (
                  <img
                    src={HERO_MANOR_UPLOAD_URL}
                    alt="Stok-Moran qo‘rg‘onidagi sirli yotoqxona: polga mahkamlangan karavot, qo‘ng‘iroq ipi va ventilyatsiya tuynugi"
                    referrerPolicy="no-referrer"
                    onError={() => setManorImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#18181B] to-[#09090B] text-[#FAFAFA]">
                    <ShieldAlert className="w-9 h-9 mb-2 text-[#F59E0B]" aria-hidden="true" />
                    <p className="font-serif text-lg">Stok-Moran yotoqxonasi</p>
                    <p className="mt-1 text-xs text-[#A1A1AA]">Yopiq xona siri</p>
                  </div>
                )}
              </div>
              <figcaption className="px-4 py-2 text-xs font-serif italic text-[#A1A1AA] bg-[#131316] border-t border-[#27272A]">
                2-rasm · Stok-Moran qo‘rg‘onidagi yopiq xona: qo‘ng‘iroq ipi va ventilyatsiya tuynugi
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 border border-[#27272A] rounded-xl bg-[#131316] divide-y lg:divide-y-0 lg:divide-x divide-[#27272A]">
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#FAFAFA] tabular-nums">20 ta</div>
            <div className="mt-1 text-sm text-[#A1A1AA]">«Chipor tasma» asosiy testi</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#FAFAFA] tabular-nums">25 ta</div>
            <div className="mt-1 text-sm text-[#A1A1AA]">«Kitob PDF si» bo‘yicha test</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#FAFAFA] tabular-nums">5 ta</div>
            <div className="mt-1 text-sm text-[#A1A1AA]">Asosiy qahramon va 4 dalil</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#FAFAFA] tabular-nums">1892-yil</div>
            <div className="mt-1 text-sm text-[#A1A1AA]">Ilk nashr etilgan yil</div>
          </div>
        </div>
      </div>
    </section>
  );
}
