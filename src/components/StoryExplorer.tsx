import { useState } from 'react';
import { Compass, Eye, ShieldAlert, Users } from 'lucide-react';
import {
  CHARACTERS,
  CLUES,
  EVIDENCE_IMAGE_URL,
  MANOR_ROOM_IMAGE_URL,
  TIMELINE_EVENTS,
} from '../data/storyData';

type ExplorerTab = 'timeline' | 'characters' | 'clues';

export function StoryExplorer() {
  const [activeTab, setActiveTab] = useState<ExplorerTab>('timeline');
  const [selectedClueId, setSelectedClueId] = useState<string>(CLUES[0].id);
  const [roomImgError, setRoomImgError] = useState(false);
  const [evidenceImgError, setEvidenceImgError] = useState(false);

  const selectedClue = CLUES.find((c) => c.id === selectedClueId) || CLUES[0];

  return (
    <section id="asar" className="py-16 border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#A1A1AA]">
              Asar tahlili va materiallar
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#FAFAFA] text-balance">
              Stok-Moran siri: voqealar, qahramonlar va dalillar
            </h2>
          </div>

          {/* Interactive Segmented Tab Control */}
          <div
            role="tablist"
            aria-label="Asar bo‘limlari"
            className="inline-flex items-center p-1 rounded-lg bg-[#131316] border border-[#27272A] self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'timeline'}
              onClick={() => setActiveTab('timeline')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-[#27272A] text-[#FAFAFA]'
                  : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
              }`}
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Syujet</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'characters'}
              onClick={() => setActiveTab('characters')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'characters'
                  ? 'bg-[#27272A] text-[#FAFAFA]'
                  : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
              }`}
            >
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Qahramonlar</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'clues'}
              onClick={() => setActiveTab('clues')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'clues'
                  ? 'bg-[#27272A] text-[#FAFAFA]'
                  : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
              }`}
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
              <span>Dalillar</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 divide-y divide-[#27272A] border-t border-b border-[#27272A]">
              {TIMELINE_EVENTS.map((ev) => (
                <article key={ev.step} className="py-5 first:pt-4 last:pb-4">
                  <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                    <span className="font-mono font-semibold text-[#FBBF24] tabular-nums">
                      {ev.step}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{ev.time}</span>
                  </div>
                  <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#FAFAFA]">
                    {ev.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#E4E4E7]">{ev.summary}</p>
                  <p className="mt-1.5 text-sm text-[#A1A1AA] leading-relaxed">{ev.detail}</p>
                </article>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <figure className="rounded-xl overflow-hidden border border-[#27272A] bg-[#131316]">
                <div className="aspect-[4/3] bg-[#18181B]">
                  {!roomImgError ? (
                    <img
                      src={MANOR_ROOM_IMAGE_URL}
                      alt="Stok-Moran qo‘rg‘onidagi yotoqxona: polga qotirilgan karavot, qo‘ng‘iroq ipi va ventilyatsiya tuynugi"
                      referrerPolicy="no-referrer"
                      onError={() => setRoomImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#FAFAFA]">
                      <ShieldAlert className="w-8 h-8 mb-2 text-[#F59E0B]" aria-hidden="true" />
                      <p className="font-serif text-lg">Stok-Moran yotoqxonasi</p>
                    </div>
                  )}
                </div>
                <figcaption className="px-4 py-2.5 text-xs font-serif italic text-[#A1A1AA] border-t border-[#27272A]">
                  2-rasm · Juliya va Elen Stonerlarning Stok-Morandagi yopiq xonasi rekonstruksiyasi
                </figcaption>
              </figure>

              <div className="p-6 rounded-xl bg-[#131316] border border-[#27272A]">
                <h4 className="font-serif text-lg font-semibold text-[#FAFAFA]">
                  Yopiq xona jumbog‘i
                </h4>
                <p className="mt-2 text-sm text-[#D4D4D8] leading-relaxed">
                  Juliya vafot etgan kechada xona eshigi ichkaridan qulflangan, deraza qopqoqlari
                  esa temir tamba bilan bekitilgan edi. Qotilning izsiz kirib-chiqishi faqat
                  devor tepasidagi soxta ventilyatsiya tuynugi orqali mumkin bo‘lgan.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Characters */}
        {activeTab === 'characters' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHARACTERS.map((person, idx) => (
              <article
                key={person.id}
                className="p-6 rounded-xl bg-[#131316] border border-[#27272A] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                    <span className="font-mono text-[#FBBF24] tabular-nums">0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{person.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{person.eraNote}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#FAFAFA]">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#D4D4D8] leading-relaxed">
                    {person.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#27272A] text-xs text-[#A1A1AA]">
                  <span className="font-semibold text-[#FAFAFA]">Asosiy xususiyati: </span>
                  {person.keyTrait}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab 3: Interactive Clues & Evidence */}
        {activeTab === 'clues' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CLUES.map((clue) => {
                  const isActive = clue.id === selectedClue.id;
                  return (
                    <button
                      key={clue.id}
                      type="button"
                      onClick={() => setSelectedClueId(clue.id)}
                      className={`text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#F59E0B] border-[#F59E0B] text-[#09090B]'
                          : 'bg-[#131316] border-[#27272A] text-[#F4F4F5] hover:bg-[#18181B]'
                      }`}
                    >
                      <div
                        className={`text-xs font-mono ${
                          isActive ? 'text-[#09090B]/80 font-semibold' : 'text-[#A1A1AA]'
                        }`}
                      >
                        {clue.index}
                      </div>
                      <div className="mt-1 font-serif text-lg font-semibold">{clue.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Clue Detail Panel */}
              <div className="p-6 rounded-xl bg-[#131316] border border-[#27272A]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FBBF24]">
                  {selectedClue.index} · Tergov tahlili
                </div>
                <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#FAFAFA]">
                  {selectedClue.title}
                </h3>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-[#27272A]">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                      Kuzatilgan holat
                    </h4>
                    <p className="mt-2 text-sm text-[#E4E4E7] leading-relaxed">
                      {selectedClue.observation}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                      Xolmsning mantiqiy xulosasi
                    </h4>
                    <p className="mt-2 text-sm text-[#E4E4E7] leading-relaxed">
                      {selectedClue.deduction}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="rounded-xl overflow-hidden border border-[#27272A] bg-[#131316]">
                <div className="aspect-[4/3] bg-[#18181B]">
                  {!evidenceImgError ? (
                    <img
                      src={EVIDENCE_IMAGE_URL}
                      alt="Asar dalillari: egilgan kamin kosovi, lupa, sutli likopcha, qamchi va Sarri grafligi xaritasi"
                      referrerPolicy="no-referrer"
                      onError={() => setEvidenceImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#FAFAFA]">
                      <Eye className="w-8 h-8 mb-2 text-[#F59E0B]" aria-hidden="true" />
                      <p className="font-serif text-lg">Stok-Moran dalillari to‘plami</p>
                    </div>
                  )}
                </div>
                <figcaption className="px-4 py-2.5 text-xs font-serif italic text-[#A1A1AA] border-t border-[#27272A]">
                  3-rasm · Tergov ashyolari: egilgan kamin kosovi, lupa, likopcha, it qamchisi va
                  Sarri xaritasi
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
