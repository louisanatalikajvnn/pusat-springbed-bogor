import styles from "./Gallery.module.scss";

export default function CustomerComplaints() {
  return (
    <section id="artikel" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>KELUHAN DAN PERMINTAAN LAYANAN</h2>
          <p className={styles.description}>
            Berbagai masalah kasur yang berhasil kami tangani
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className={styles.galleryItem}
              style={{ aspectRatio: "1" }}
            >
              <div className={styles.placeholder}>
                <div className={styles.placeholderContent}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p>Keluhan {item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Gambar placeholder - akan diganti dengan foto keluhan pelanggan
          sesungguhnya
        </p>
      </div>
    </section>
  );
}
