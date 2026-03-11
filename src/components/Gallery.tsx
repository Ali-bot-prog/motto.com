"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/gallery-espresso.png", alt: "Mükemmel espresso shot, altın rengi crema" },
  { src: "/gallery-latte.png", alt: "El sanatı latte art rosetta" },
  { src: "/gallery-turkish.png", alt: "Geleneksel Türk kahvesi cezve ile servis" },
  { src: "/gallery-interior.png", alt: "Kahve Ateşi iç mekânı, sahil manzarası" },
  { src: "/story-bg.png", alt: "Taze kavrulan kahve çekirdekleri" },
  { src: "/hero-bg.png", alt: "Kahve Ateşi atmosferik mekân" },
];

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".fade-in").forEach((node) =>
            node.classList.add("visible")
          );
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section
        className="gallery-section"
        id="galeri"
        ref={ref}
        aria-labelledby="gallery-heading"
      >
        <div className="container">
          <div className="gallery-header">
            <span className="section-label fade-in">Galeri</span>
            <h2 id="gallery-heading" className="fade-in fade-in-delay-1">
              Anlar & Atmosfer
            </h2>
          </div>

          <div className="gallery-grid fade-in fade-in-delay-2" role="list">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                role="listitem"
                onClick={() => {
                  setLightboxSrc(img.src);
                  setLightboxAlt(img.alt);
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLightboxSrc(img.src);
                    setLightboxAlt(img.alt);
                  }
                }}
                aria-label={`Büyütmek için tıkla: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-icon" aria-hidden="true">⊕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxSrc ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Fotoğraf önizleme"
        onClick={() => setLightboxSrc(null)}
      >
        <button
          className="lightbox-close"
          onClick={() => setLightboxSrc(null)}
          aria-label="Kapat"
        >
          ×
        </button>
        {lightboxSrc && (
          <Image
            src={lightboxSrc}
            alt={lightboxAlt}
            width={1200}
            height={800}
            style={{ objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  );
}
