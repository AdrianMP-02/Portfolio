"use client";

import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコサシスセソ<>/{}[]#$";

type Glyph = { ch: string; yellow: boolean };
type Column = { head: number; glyphs: Glyph[] };

export default function BackgroundFX() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Efecto 1: rejilla iluminada bajo el ratón
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
      root.classList.add("fx-on");
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      root.classList.remove("fx-on");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Efecto 2: lluvia de datos
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let idleHandle: number | null = null;
    let idleIsRic = false;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let ro: ResizeObserver | null = null;
    let started = false;
    let disposed = false;

    let cell = 22;
    let tickMs = 85;
    let fraction = 0.35;
    let width = 0;
    let height = 0;
    let fontFamily = "monospace";
    let trail = 14;
    let drops: Column[] = [];
    const newGlyph = (): Glyph => ({
      ch: CHARS[Math.floor(Math.random() * CHARS.length)],
      yellow: Math.random() < 0.02,
    });
    let active: boolean[] = [];
    let last = 0;
    let acc = 0;

    const readFont = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--font-jetbrains").trim();
      fontFamily = v ? `${v}, monospace` : "monospace";
    };

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      const small = width < 768;
      cell = small ? 26 : 22;
      tickMs = small ? 120 : 85;
      fraction = small ? 0.25 : 0.35;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      active = Array.from({ length: cols }, () => Math.random() < fraction);
      trail = small ? 10 : 14;
      drops = Array.from({ length: cols }, () => ({
        head: Math.floor(Math.random() * rows) - Math.floor(Math.random() * 20),
        glyphs: Array.from({ length: trail }, newGlyph),
      }));
    };

    const step = () => {
      const rows = Math.ceil(height / cell);
      ctx.clearRect(0, 0, width, height);
      ctx.font = `12px ${fontFamily}`;
      ctx.textBaseline = "top";
      for (let i = 0; i < drops.length; i++) {
        if (!active[i]) continue;
        const col = drops[i];
        if (col.head - trail > rows && Math.random() < 0.02) {
          col.head = -Math.floor(Math.random() * 20);
          col.glyphs = Array.from({ length: trail }, newGlyph);
        } else {
          col.head++;
          col.glyphs.unshift(newGlyph());
          col.glyphs.pop();
        }
        if (Math.random() < 0.05) col.glyphs[Math.floor(Math.random() * trail)] = newGlyph();
        for (let k = 0; k < trail; k++) {
          const row = col.head - k;
          if (row < 0 || row >= rows) continue;
          const g = col.glyphs[k];
          if (k === 0) {
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = g.yellow ? "#f3e600" : "rgb(0,240,255)";
          } else {
            ctx.globalAlpha = (1 - k / trail) * 0.55;
            ctx.fillStyle = "rgb(0,240,255)";
          }
          ctx.fillText(g.ch, i * cell, row * cell);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      acc += t - last;
      last = t;
      if (acc > tickMs * 4) acc = tickMs;
      if (acc >= tickMs) {
        acc %= tickMs;
        step();
      }
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };
    const run = () => {
      if (raf || !started || disposed || motionMq.matches || document.hidden) return;
      last = performance.now();
      acc = 0;
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!started) return;
        setup();
      }, 150);
    };
    const onVisibility = () => (document.hidden ? stop() : run());
    const onMotion = () => {
      if (motionMq.matches) {
        stop();
        ctx.clearRect(0, 0, width, height);
      } else {
        if (started) setup();
        run();
      }
    };

    const start = () => {
      if (disposed) return;
      started = true;
      readFont();
      setup();
      ro = new ResizeObserver(onResize);
      ro.observe(document.documentElement);
      run();
    };

    document.addEventListener("visibilitychange", onVisibility);
    motionMq.addEventListener("change", onMotion);

    if ("requestIdleCallback" in window) {
      idleIsRic = true;
      idleHandle = window.requestIdleCallback(start);
    } else {
      timeoutHandle = setTimeout(start, 300);
    }

    return () => {
      disposed = true;
      stop();
      clearTimeout(resizeTimer);
      clearTimeout(timeoutHandle);
      if (idleIsRic && idleHandle !== null) window.cancelIdleCallback(idleHandle);
      ro?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motionMq.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="fx-root">
      <div className="fx-glow" />
      <div className="fx-halo" />
      <canvas ref={canvasRef} className="fx-rain" />
    </div>
  );
}
