import styles from "./Gallery.module.scss";

export default function BeforeAfter() {
  return (
    <section id="galeri" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>BEFORE AFTER Pusat Springbed Bogor</h2>
          <p className={styles.description}>
            Lihat transformasi kasur yang telah kami perbaiki
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.galleryItem}>
              <div className={styles.placeholder}>
                <div className={styles.placeholderContent}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Before/After {item}</p>
                </div>
              </div>
              <div className={styles.badge}>Foto {item}</div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Gambar placeholder - akan diganti dengan foto before/after
          sesungguhnya
        </p>
      </div>
    </section>
  );
}
