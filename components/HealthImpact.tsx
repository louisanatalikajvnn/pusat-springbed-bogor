import styles from "./HealthImpact.module.scss";

export default function HealthImpact() {
  const impacts = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Sakit Punggung atau Leher",
      description:
        "Kasur yang tidak mendukung tubuh dengan baik dapat menyebabkan ketegangan otot, nyeri punggung, dan masalah tulang belakang.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Stres dan Mood Buruk",
      description:
        "Tidur yang tidak nyaman dapat meningkatkan stres dan menurunkan suasana hati. Selain itu, dapat sulit konsentrasi dan membuat keputusan.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Dampak Kesehatan Jangka Panjang",
      description:
        "Kasur yang tidak mendukung dapat memperburuk postur tubuh, insomnia dan meningkatkan risiko hipertensi, diabetes, dan gangguan jantung.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            DAMPAK YANG DIRASAKAN DARI
            <span>PENGGUNAAN KASUR YANG TIDAK MENDUKUNG</span>
          </h2>
        </div>

        <div className={styles.impactsGrid}>
          {impacts.map((impact, index) => (
            <div key={index} className={styles.impactCard}>
              <div className={styles.iconWrapper}>{impact.icon}</div>
              <h3 className={styles.impactTitle}>{impact.title}</h3>
              <p className={styles.impactDescription}>{impact.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.solutionBanner}>
          <div className={styles.solutionContent}>
            <h3 className={styles.solutionLabel}>Solusi:</h3>
            <h2 className={styles.solutionTitle}>Pusat Springbed Bogor</h2>
            <p className={styles.solutionTagline}>
              SOLUSI TEPAT UNTUK MASALAH KASUR ANDA
            </p>
            <p className={styles.solutionDescription}>
              KARENA BUKAN HANYA FISIK YANG KAMI PERBAIKI MELAINKAN KENYAMANAN
              SESUAI KEINGINAN ANDA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
