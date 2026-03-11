"use client";

import React, { useEffect, useRef, FormEvent, useState } from "react";

const hours = [
  { day: "Pazartesi", time: "07:30 – 01:00" },
  { day: "Salı", time: "07:30 – 01:00" },
  { day: "Çarşamba", time: "07:30 – 01:00" },
  { day: "Perşembe", time: "07:30 – 01:00" },
  { day: "Cuma", time: "07:30 – 01:00" },
  { day: "Cumartesi", time: "07:30 – 01:00" },
  { day: "Pazar", time: "07:30 – 01:00" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="iletisim" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact-info fade-in">
            <span className="section-label">İletişim</span>
            <h2 id="contact-heading">Bizi Bulun</h2>
            <div className="divider" />
            <p>
              Karadeniz&apos;in serin rüzgarıyla sahil kenarında bir fincan kahveye ne dersiniz?
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  📍
                </div>
                <div>
                  <div className="contact-item-label">Adres</div>
                  <div className="contact-item-value">
                    Çamurlu, Devlet Sahil Yolu No:32
                    <small>52300 Ünye / Ordu</small>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  📞
                </div>
                <div>
                  <div className="contact-item-label">Telefon</div>
                  <div className="contact-item-value">
                    <a
                      href="tel:+904523336111"
                      style={{ color: "inherit" }}
                      aria-label="Kahve Ateşi telefon numarası"
                    >
                      (0452) 333 61 11
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  🕐
                </div>
                <div>
                  <div className="contact-item-label">Çalışma Saatleri</div>
                  <div className="hours-grid" aria-label="Çalışma saatleri tablosu">
                    {hours.map((h) => (
                      <React.Fragment key={h.day}>
                        <span className="hours-day">{h.day}</span>
                        <span className="hours-time">{h.time}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links" aria-label="Sosyal medya bağlantıları">
              <a
                href="https://www.instagram.com/unyemotto"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram: @unyemotto"
              >
                {/* Instagram SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Çamurlu+Devlet+Sahil+Yolu+No:32+Ünye+Ordu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Google Haritalar'da görüntüle"
              >
                📍
              </a>
            </div>
          </div>

          {/* Map + Form */}
          <div className="contact-form-wrap fade-in fade-in-delay-2">
            {/* Google Maps Embed */}
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5!2d36.7628!3d41.1337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA4JzAxLjMiTiAzNsKwNDUnNDYuMSJF!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                title="Kahve Ateşi konumu — Ünye, Ordu"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Contact Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} aria-label="İletişim formu" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınız Soyadınız"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Merhaba, sizi ziyaret etmek istiyorum..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Mesajı Gönder
                </button>
              </form>
            ) : (
              <div className="form-success visible" role="status" aria-live="polite">
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>☕</div>
                <strong>Mesajınız alındı!</strong>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--color-muted)" }}>
                  En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
