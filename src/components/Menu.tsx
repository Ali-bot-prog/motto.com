"use client";

import { useEffect, useRef } from "react";

const coffees = [
  {
    icon: "☕",
    name: "Espresso",
    desc: "Yoğun ve aromatik. Günün her saatinde sizi uyandıracak güçlü bir başlangıç.",
    tags: ["Yoğun", "Sert", "Aromatik"],
  },
  {
    icon: "🥛",
    name: "Latte",
    desc: "Krema kıvamında buharlı süt ile yumuşatılmış espresso. İpek gibi bir içim.",
    tags: ["Yumuşak", "Kremsi", "Dengeli"],
  },
  {
    icon: "🌊",
    name: "Americano",
    desc: "Espresso'nun sıcak su ile buluşması. Temiz ve uzun içimli bir klasik.",
    tags: ["Hafif", "Uzun", "Temiz"],
  },
  {
    icon: "🫖",
    name: "Türk Kahvesi",
    desc: "Geleneksel yöntemle, cezve'de pişirilen köklü bir lezzet mirası.",
    tags: ["Geleneksel", "Tortulu", "Derin"],
  },
  {
    icon: "💧",
    name: "Pour Over",
    desc: "El demiyle, tek kökenli çekirdekten çıkarılan karmaşık aromalar.",
    tags: ["Çiçeksi", "Meyvemsi", "İnce"],
  },
  {
    icon: "🧊",
    name: "Cold Brew",
    desc: "18 saat soğuk demleme. Yaz sıcağında serinleten, tatlı bir serinlik.",
    tags: ["Soğuk", "Tatlı", "Serinletici"],
  },
];

export default function Menu() {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="menu-section" id="kahvelerimiz" ref={ref} aria-labelledby="menu-heading">
      <div className="container">
        <div className="menu-header">
          <span className="section-label fade-in">Menümüz</span>
          <h2 id="menu-heading" className="fade-in fade-in-delay-1">
            Kahvelerimiz
          </h2>
          <div className="divider fade-in fade-in-delay-2" />
          <p className="fade-in fade-in-delay-2">
            Her fincan ayrı bir yolculuk. Özenle seçilmiş çekirdekler, uzman eller ve sevgiyle
            sunulur.
          </p>
        </div>

        <div className="menu-grid" role="list">
          {coffees.map((c, i) => (
            <article
              key={i}
              className={`menu-card fade-in fade-in-delay-${(i % 3) + 1}`}
              role="listitem"
              aria-label={c.name}
            >
              <span className="menu-card-icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3 className="menu-card-name">{c.name}</h3>
              <p className="menu-card-desc">{c.desc}</p>
              <div className="menu-tags" aria-label="Lezzet notaları">
                {c.tags.map((tag) => (
                  <span key={tag} className="menu-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
