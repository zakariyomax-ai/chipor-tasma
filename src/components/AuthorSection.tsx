import { useState } from 'react';
import { User } from 'lucide-react';
import {
  AUTHOR_BIO_SECTIONS,
  AUTHOR_BIO_SUBTITLE,
  AUTHOR_BIO_TITLE,
  AUTHOR_PORTRAIT_URL,
} from '../data/storyData';

export function AuthorSection() {
  const [imgError, setImgError] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('all');

  const visibleSections =
    activeSectionId === 'all'
      ? AUTHOR_BIO_SECTIONS
      : AUTHOR_BIO_SECTIONS.filter((sec) => sec.id === activeSectionId);

  return (
    <section id="muallif" className="py-16 border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#FBBF24]">
              Qo‘shimcha · Kitob muallifi
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#FAFAFA] text-balance">
              {AUTHOR_BIO_TITLE}
            </h2>
            <p className="mt-2 text-base text-[#A1A1AA]">{AUTHOR_BIO_SUBTITLE}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: User-Provided Portrait */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <figure className="rounded-xl overflow-hidden border border-[#27272A] bg-[#131316]">
              <div className="aspect-[3/4] bg-[#18181B]">
                {!imgError ? (
                  <img
                    src={AUTHOR_PORTRAIT_URL}
                    alt="Ser Artur Ignasius Konan Doyl portreti"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#FAFAFA]">
                    <User className="w-10 h-10 mb-3 text-[#F59E0B]" aria-hidden="true" />
                    <p className="font-serif text-xl">Ser Artur Konan Doyl</p>
                    <p className="mt-1 text-xs text-[#A1A1AA]">1859 — 1930</p>
                  </div>
                )}
              </div>
              <figcaption className="px-4 py-3 text-xs font-serif italic text-[#A1A1AA] border-t border-[#27272A]">
                Kitob muallifi · Ser Artur Ignasius Konan Doyl (1859–1930)
              </figcaption>
            </figure>

            {/* Quick Facts Card */}
            <dl className="rounded-xl border border-[#27272A] bg-[#131316] divide-y divide-[#27272A] text-sm">
              <div className="px-4 py-3 flex items-center justify-between gap-4">
                <dt className="text-[#A1A1AA]">Tavalludi</dt>
                <dd className="font-mono text-xs font-medium text-[#FAFAFA]">1859-yil 22-may</dd>
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-4">
                <dt className="text-[#A1A1AA]">Vafoti</dt>
                <dd className="font-mono text-xs font-medium text-[#FAFAFA]">1930-yil 7-iyul</dd>
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-4">
                <dt className="text-[#A1A1AA]">Mutaxassisligi</dt>
                <dd className="text-xs font-medium text-[#FAFAFA] text-right">
                  Shifokor, yozuvchi, jamoat arbobi
                </dd>
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-4">
                <dt className="text-[#A1A1AA]">Unvoni</dt>
                <dd className="text-xs font-medium text-[#FAFAFA]">«Ser» (Ritsar, 1902)</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Full 5-Part Biography */}
          <div className="lg:col-span-8 space-y-6">
            {/* Section Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#131316] border border-[#27272A]">
              <button
                type="button"
                onClick={() => setActiveSectionId('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeSectionId === 'all'
                    ? 'bg-[#27272A] text-[#FAFAFA]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                Barcha bo‘limlar
              </button>
              {AUTHOR_BIO_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    activeSectionId === sec.id
                      ? 'bg-[#27272A] text-[#FAFAFA]'
                      : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                  }`}
                >
                  {sec.number}. {sec.title}
                </button>
              ))}
            </div>

            {/* Biography Chapters */}
            <div className="space-y-6">
              {visibleSections.map((section) => (
                <article
                  key={section.id}
                  className="p-6 sm:p-7 rounded-xl bg-[#131316] border border-[#27272A]"
                >
                  <div className="flex items-baseline gap-3 pb-4 border-b border-[#27272A]">
                    <span className="font-mono text-sm font-semibold text-[#FBBF24] tabular-nums">
                      0{section.number}.
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FAFAFA]">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="mt-4 divide-y divide-[#27272A]/70">
                    {section.points.map((pt) => (
                      <li key={pt.label} className="py-3 first:pt-1 last:pb-0 text-sm leading-relaxed">
                        <span className="font-semibold text-[#FAFAFA]">{pt.label}. </span>
                        <span className="text-[#D4D4D8]">{pt.text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
