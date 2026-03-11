import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="navbar-logo" aria-label="Kahve Ateşi ana sayfaya dön">
              KAHVE <span style={{ color: "var(--color-primary)" }}>ATEŞİ</span>
              <small style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-muted)", marginTop: "2px", fontWeight: 400 }}>
                Ünye — Ordu
              </small>
            </Link>
            <p>
              Karadeniz&apos;in incisi Ünye&apos;de, Sahil Yolu&apos;nda sizi bekleyen
              sıcak bir fincan ve unutulmaz bir atmosfer.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigasyon">
            <div className="footer-col">
              <h4>Keşfet</h4>
              <ul>
                <li><a href="#hikayemiz">Hikayemiz</a></li>
                <li><a href="#kahvelerimiz">Kahvelerimiz</a></li>
                <li><a href="#galeri">Galeri</a></li>
                <li><a href="#iletisim">İletişim</a></li>
              </ul>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Bize Ulaşın</h4>
            <ul>
              <li>
                <a
                  href="tel:+904523336111"
                  aria-label="Kahve Ateşi telefon"
                >
                  (0452) 333 61 11
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unyemotto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @unyemotto"
                >
                  @unyemotto
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Çamurlu+Devlet+Sahil+Yolu+No:32+Ünye+Ordu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haritada göster"
                >
                  Ünye, Ordu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Kahve Ateşi. Tüm hakları saklıdır.
          </p>
          <p className="footer-copy">
            Çamurlu, Devlet Sahil Yolu No:32, 52300 Ünye / Ordu
          </p>
        </div>
      </div>
    </footer>
  );
}
