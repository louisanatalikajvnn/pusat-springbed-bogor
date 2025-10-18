import styles from "./BrandShowcase.module.scss";

export default function BrandShowcase() {
  const brands = [
    "King Koil",
    "Serta",
    "Sealy",
    "Simmons",
    "Tempur-Pedic",
    "Lady Americana",
    "Spring Air",
    "Florence",
    "Airland",
    "Comforta",
    "Elite",
    "Dunlopillo",
    "The Luxe",
    "Guhdo",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Merek Spring Bed yang Telah Kami Service
          </h2>
          <p className={styles.description}>
            Berpengalaman menangani berbagai merek kasur ternama
          </p>
        </div>

        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.brandCard}>
              <h3 className={styles.brandName}>{brand}</h3>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <p className={styles.noteText}>* Dan masih banyak merek lainnya</p>
          <p className={styles.contactText}>
            Tidak menemukan merek Anda? Hubungi kami untuk konsultasi!
          </p>
        </div>
      </div>
    </section>
  );
}
