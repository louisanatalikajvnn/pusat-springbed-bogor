"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoText}>Pusat Springbed Bogor</div>
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="#layanan" className={styles.navLink}>
              Layanan Kami
            </Link>
            <Link href="#artikel" className={styles.navLink}>
              Artikel
            </Link>
            <Link href="#galeri" className={styles.navLink}>
              Galeri
            </Link>
            <Link href="#testimoni" className={styles.navLink}>
              Testimoni
            </Link>
            <Link href="#contact" className={styles.ctaButton}>
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <Link
              href="/"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#layanan"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan Kami
            </Link>
            <Link
              href="#artikel"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Artikel
            </Link>
            <Link
              href="#galeri"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="#testimoni"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Link
              href="#contact"
              className={styles.mobileCtaButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
