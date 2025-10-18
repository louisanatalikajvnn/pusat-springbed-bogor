import Link from "next/link";
import styles from "./HeroNew.module.scss";
import ParticleBackground from "./ParticleBackground";
import SwipeableCards from "./SwipeableCards";

export default function HeroNew() {
  return (
    <section className={styles.hero}>
      <ParticleBackground />
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <div className={styles.heroHeading}>
              <h1 className={styles.heroTitle}>
                Solusi Terbaik untuk
                <span className={styles.highlight}>Kasur Anda</span>
              </h1>
              <p className={styles.heroDescription}>
                Layanan perbaikan dan service kasur profesional untuk kenyamanan
                tidur yang lebih baik
              </p>
            </div>

            <div className={styles.heroButtons}>
              <Link href="#contact" className={styles.primaryButton}>
                Konsultasi Gratis
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="#layanan" className={styles.secondaryButton}>
                Lihat Layanan
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Tahun Pengalaman</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Pelanggan Puas</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Right Swipeable Cards */}
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <SwipeableCards />
            </div>
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
