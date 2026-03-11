"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "07:30", label: "Her Gün Açılış" },
  { number: "100+", label: "Günlük Fincan" },
  { number: "5", label: "Farklı Demleme" },
  { number: "Sahil", label: "Ünye'nin Kalbinde" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-in").forEach((node) => node.classList.add("visible"));
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref} aria-label="İstatistikler">
      <div className="container">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div key={i} className={`stat-item fade-in fade-in-delay-${i + 1}`}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
