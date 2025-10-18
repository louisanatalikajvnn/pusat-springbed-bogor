import styles from "./LayananKami.module.scss";

export default function LayananKami() {
  return (
    <section id="layanan" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Layanan Kami</h2>
          <p className={styles.description}>
            Layanan lengkap dan profesional untuk semua kebutuhan perbaikan
            kasur Anda
          </p>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Perbaikan Struktur Kasur</h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penggantian atau perbaikan pegas yang patah atau rusak
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Perbaikan rangka kayu yang retak atau tidak stabil</span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Penguatan struktur rangka kasur agar lebih kokoh</span>
              </li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>
              Penggantian Bahan dan Komponen
            </h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penggantian busa yang kempis atau usang dengan busa
                  berkualitas baru
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Penambahan lapisan busa untuk menambah kenyamanan</span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penggantian kain cover kasur dengan desain baru atau bahan
                  yang lebih tahan lama
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>
              Perbaikan Estetika dan Kebersihan
            </h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Perbaikan kain cover kasur yang sobek atau lusuh</span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Jasa cuci kasur untuk membersihkan dari debu, noda, dan jamur
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penyegaran kasur dengan penghilangan bau tidak sedap
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Kustomisasi Kasur</h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penyesuaian tingkat kelembutan atau kekerasan kasur sesuai
                  preferensi pelanggan
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Modifikasi ukuran kasur untuk kebutuhan khusus, potong atau
                  tambah ukuran
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Penanganan kasur yang kendur di bagian tengah agar kembali
                  rata
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>
              Perbaikan Divan dan Headboard
            </h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Perbaikan divan dan headboard</span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  Modifikasi ukuran divan dan headboard, potong atau tambah
                  ukuran
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.premiumCard}>
            <h3 className={styles.serviceTitle}>Layanan Tambahan</h3>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                <span className={styles.icon}>🛏️</span>
                <div>
                  <strong>Sedia Sewa Kasur</strong>
                  <span>
                    Untuk pelanggan seperti hotel atau rumah tangga yang
                    membutuhkan kasur sewa pengganti selama perbaikan
                  </span>
                </div>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.icon}>✅</span>
                <div>
                  <strong>Garansi Layanan</strong>
                  <span>
                    Jaminan kualitas untuk perbaikan kasur (Garansi Spring 10
                    tahun)
                  </span>
                </div>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.icon}>🚚</span>
                <div>
                  <strong>Gratis Layanan Antar Jemput</strong>
                  <span>
                    Nikmati kemudahan layanan antar jemput kasur gratis khusus
                    untuk area Jabodetabek. Anda hanya perlu menghubungi kami,
                    dan tim kami akan mengurus semua kebutuhan service kasur
                    Anda, dari awal hingga kasur kembali ke rumah Anda dalam
                    kondisi prima.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
