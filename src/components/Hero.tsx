"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="anasayfa" aria-label="Ana sayfa hero bölümü">
      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/hero-bg.png"
          alt="Kahve Ateşi - Ünye sahil yolunda atmosferik kahvehane"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-noise" />

      {/* Content */}
      <div className="container">
        <div className="hero-content" ref={contentRef}>
          <span className="hero-eyebrow">
            Ünye · Ordu · Türkiye
          </span>
          <h1>
            Ateşin Kokusu,<br />
            <em>Kahvenin Ruhu</em>
          </h1>
          <p className="hero-sub">
            Sahil Yolu&apos;nun kalbinde, her yudumda hissedilen
            tutku ve zanaatın buluştuğu yer.
          </p>
          <div className="hero-actions">
            <a href="#kahvelerimiz" className="btn btn-primary">
              Kahvelerimizi Keşfet
            </a>
            <a href="#hikayemiz" className="btn btn-outline">
              Hikayemizi Oku
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        <span>Keşfet</span>
      </div>
    </section>
  );
}
