import styles from "./HealthyMattress.module.scss";

export default function HealthyMattress() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>KONSEP KASUR SEHAT & TEPAT</h2>
        </div>

        <div className={styles.comparisonGrid}>
          <div className={`${styles.comparisonCard} ${styles.cardBad}`}>
            <div className={styles.cardContent}>
              <div className={styles.emoji}>❌</div>
              <h3 className={styles.cardTitle}>Terlalu Empuk</h3>
            </div>
            <p className={styles.cardDescription}>
              Membuat posisi tubuh/tulang tidak natural, karena terlalu
              tenggelam
            </p>
          </div>

          <div className={`${styles.comparisonCard} ${styles.cardWarning}`}>
            <div className={styles.cardContent}>
              <div className={styles.emoji}>❌</div>
              <h3 className={styles.cardTitle}>Terlalu Keras</h3>
            </div>
            <p className={styles.cardDescription}>
              Memberikan tekanan pada leher, bahu, pinggang yang menyebabkan
              nyeri & kaku
            </p>
          </div>

          <div className={`${styles.comparisonCard} ${styles.cardGood}`}>
            <div className={styles.cardContent}>
              <div className={styles.emoji}>✅</div>
              <h3 className={styles.cardTitle}>Kasur Sehat</h3>
            </div>
            <p className={styles.cardDescription}>
              Mampu mengikuti bentuk tubuh & tulang serta menjaga posisinya
              dalam jangka waktu panjang
            </p>
          </div>
        </div>

        <div className={styles.banner}>
          <h3 className={styles.bannerTitle}>
            DENGAN PENGALAMAN DI BIDANG PRODUKSI MATRAS DAN
            <span>EXPERTISE DI BIDANG MATRAS</span>
          </h3>
          <div className={styles.bannerBrand}>Pusat Springbed Bogor</div>
          <p className={styles.bannerDescription}>
            SIAP MEMBERIKAN SOLUSI UNTUK ANDA DENGAN MENGHADIRKAN
            <span>KASUR YANG SEHAT & TEPAT</span>
          </p>
        </div>
      </div>
    </section>
  );
}
