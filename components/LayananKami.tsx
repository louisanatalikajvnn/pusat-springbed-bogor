import Image from "next/image";
import styles from "./LayananKami.module.scss";

interface Service {
  title: string;
  image: string;
  imageAlt: string;
  items: string[];
}

const services: Service[] = [
  {
    title: "Perbaikan Struktur Kasur",
    image: "/images/services/perbaikan-struktur-kasur.png",
    imageAlt: "Perbaikan struktur dan pegas kasur",
    items: [
      "Penggantian atau perbaikan pegas yang patah atau rusak",
      "Perbaikan rangka kayu yang retak atau tidak stabil",
      "Penguatan struktur rangka kasur agar lebih kokoh",
    ],
  },
  {
    title: "Penggantian Bahan dan Komponen",
    image: "/images/services/penggantian-bahan-dan-komponen.png",
    imageAlt: "Penggantian busa dan cover kasur",
    items: [
      "Penggantian busa yang kempis atau usang dengan busa berkualitas baru",
      "Penambahan lapisan busa untuk menambah kenyamanan",
      "Penggantian kain cover kasur dengan desain baru atau bahan yang lebih tahan lama",
    ],
  },
  {
    title: "Kustomisasi Kasur",
    image: "/images/services/kustomisasi-kasur.png",
    imageAlt: "Kustomisasi dan modifikasi kasur",
    items: [
      "Penyesuaian tingkat kelembutan atau kekerasan kasur sesuai preferensi pelanggan",
      "Modifikasi ukuran kasur untuk kebutuhan khusus, potong atau tambah ukuran",
      "Penanganan kasur yang kendur di bagian tengah agar kembali rata",
    ],
  },
  {
    title: "Perbaikan Divan dan Headboard",
    image: "/images/services/perbaikan-divan-dan-headboard.png",
    imageAlt: "Perbaikan divan dan headboard",
    items: [
      "Perbaikan divan dan headboard",
      "Modifikasi ukuran divan dan headboard, potong atau tambah ukuran",
    ],
  },
];

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
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageOverlay}></div>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.titleSection}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <div className={styles.titleAccent}></div>
                </div>
                <ul className={styles.serviceList}>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.serviceItem}>
                      <span className={styles.checkmark}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M6 10L9 13L14 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className={styles.premiumCard}>
            <h3 className={styles.serviceTitle}>Layanan Tambahan</h3>
            <ul className={styles.serviceList}>
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
