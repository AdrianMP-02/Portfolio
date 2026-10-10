'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export { SLIDE, SLIDE_WIDE } from './slideClasses';

const pad = (n: number) => String(n).padStart(2, '0');

export default function ProjectSlider({
  children,
  label,
  lang,
}: {
  children: ReactNode;
  label: string;
  lang: 'es' | 'en';
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [count, setCount] = useState(0);
  const childCount = Children.count(children);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const max = track.scrollWidth - track.clientWidth;
    const start = track.scrollLeft <= 2;
    const end = track.scrollLeft >= max - 2;
    let active = 0;
    if (end && slides.length > 0) {
      active = slides.length - 1;
    } else {
      let best = Infinity;
      slides.forEach((s, i) => {
        const d = Math.abs(s.offsetLeft - track.scrollLeft);
        if (d < best) {
          best = d;
          active = i;
        }
      });
    }
    setIndex(active);
    setAtStart(start);
    setAtEnd(end);
    setCount(slides.length);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(track);
    update();
    return () => {
      track.removeEventListener('scroll', onScroll);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  useEffect(() => {
    update();
  }, [childCount, update]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children;
    const target = slides[Math.max(0, Math.min(i, slides.length - 1))] as HTMLElement | undefined;
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // La pista es position:relative, así que offsetLeft ya es relativo a ella.
    track.scrollTo({ left: target.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  const es = lang === 'es';
  const hideControls = atStart && atEnd;

  return (
    <div>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory motion-safe:scroll-smooth items-stretch pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary outline-offset-4"
      >
        {children}
      </div>

      {!hideControls && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-1.5 flex-1">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={es ? `Ir al proyecto ${i + 1}` : `Go to project ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className="group flex-1 max-w-10 py-2"
              >
                <span
                  className={`block h-1 w-full transition-colors ${
                    i === index ? 'bg-primary' : 'bg-line group-hover:bg-muted'
                  }`}
                />
              </button>
            ))}
          </div>

          <div aria-live="polite" className="font-mono text-[12px] text-muted">
            <span className="text-heading">{pad(index + 1)}</span> / {pad(count)}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={atStart}
              aria-label={es ? 'Anterior' : 'Previous'}
              className="w-10 h-10 flex items-center justify-center border border-line text-heading clip-cut-sm hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={atEnd}
              aria-label={es ? 'Siguiente' : 'Next'}
              className="w-10 h-10 flex items-center justify-center border border-line text-heading clip-cut-sm hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
