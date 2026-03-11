"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  { icon: "🔥", text: "Ateşte kavrulan taze çekirdekler" },
  { icon: "🌊", text: "Sahil Yolu üzerinde eşsiz atmosfer" },
  { icon: "☕", text: "Uzman barista ekibi" },
  { icon: "🌿", text: "Özenle seçilmiş single-origin kahveler" },
];

export default function Story() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="story" id="hikayemiz" ref={ref} aria-labelledby="story-heading">
      <div className="container">
        <div className="story-grid">
          {/* Image */}
          <div className="story-image-wrap fade-in">
            <Image
              src="/story-bg.png"
              alt="Kahve Ateşi'nin el yöntemiyle kavrulan taze kahve çekirdekleri"
              width={600}
              height={560}
              style={{ objectFit: "cover", width: "100%", height: "560px", borderRadius: "12px" }}
            />
            <div className="story-badge" aria-label="Günlük taze kavrum">
              <span className="story-badge-year">Günlük</span>
              <span className="story-badge-text">Taze Kavrum</span>
            </div>
          </div>

          {/* Content */}
          <div className="story-content">
            <span className="section-label fade-in">Hikayemiz</span>
            <h2 id="story-heading" className="fade-in fade-in-delay-1">
              Ünye&apos;nin<br />
              <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Ateşli</em> Kahvesi
            </h2>
            <div className="divider fade-in fade-in-delay-2" />
            <p className="fade-in fade-in-delay-2">
              Karadeniz&apos;in incisi Ünye&apos;de, Devlet Sahil Yolu üzerinde konumlanan Kahve Ateşi;
              kahve tutkunlarının buluşma noktasıdır. Her fincan, titizlikle seçilmiş çekirdeklerin
              ustalıkla demlenmesiyle hayat bulur.
            </p>
            <p className="fade-in fade-in-delay-3">
              Misafirlerimize sunduğumuz her içecek, bir ritüeldir. Espresso&apos;nun yoğun
              karakterinden, filtre kahvenin narin aromasına; Türk kahvesinin derinliğinden
              cold brew&apos;un serinliğine — her damak zevkine hitap eden bir dünya
              sizi Ünye&apos;de bekliyor.
            </p>

            <div className="story-features fade-in fade-in-delay-4">
              {features.map((f, i) => (
                <div key={i} className="story-feature">
                  <div className="story-feature-icon" aria-hidden="true">{f.icon}</div>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
