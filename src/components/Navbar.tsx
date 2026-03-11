"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo">
              KAHVE <span>ATEŞİ</span>
              <small>Ünye — Ordu</small>
            </Link>

            <ul className="navbar-nav">
              <li><a href="#hikayemiz">Hikayemiz</a></li>
              <li><a href="#kahvelerimiz">Kahvelerimiz</a></li>
              <li><a href="#galeri">Galeri</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>

            <a
              href="#iletisim"
              className="btn btn-primary navbar-cta"
              aria-label="Bizi ziyaret et"
            >
              Bizi Ziyaret Et
            </a>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasyon menüsü"
      >
        <a href="#hikayemiz" onClick={handleNavClick}>Hikayemiz</a>
        <a href="#kahvelerimiz" onClick={handleNavClick}>Kahvelerimiz</a>
        <a href="#galeri" onClick={handleNavClick}>Galeri</a>
        <a href="#iletisim" onClick={handleNavClick}>İletişim</a>
        <a href="#iletisim" className="btn btn-primary" onClick={handleNavClick}>
          Bizi Ziyaret Et
        </a>
      </div>
    </>
  );
}
