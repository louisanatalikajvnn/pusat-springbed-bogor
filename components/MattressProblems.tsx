import styles from "./MattressProblems.module.scss";

export default function MattressProblems() {
  const problems = [
    {
      icon: "🔧",
      title: "Pegas rusak atau berbunyi",
      description: "Suara berisik dan tidak nyaman saat tidur",
    },
    {
      icon: "🧵",
      title: "Kain cover kasur sobek atau lusuh",
      description: "Tampilan kasur tidak menarik dan tidak higienis",
    },
    {
      icon: "💤",
      title: "Kasur terlalu keras atau terlalu empuk",
      description: "Tidak memberikan support yang tepat untuk tubuh",
    },
    {
      icon: "📉",
      title: "Busa kasur mengempis atau bergelombang",
      description: "Permukaan tidak rata dan tidak nyaman",
    },
    {
      icon: "🦠",
      title: "Kasur menjadi sarang tungau",
      description: "Mengancam kesehatan dan kebersihan",
    },
    {
      icon: "⚠️",
      title: "Kasur terlalu tipis dan per terasa",
      description: "Tidak ada perlindungan yang cukup dari pegas",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Contoh Gejala Kasur Mulai Tidak Nyaman
          </h2>
          <p className={styles.description}>
            Kenali tanda-tanda kasur Anda membutuhkan perbaikan
          </p>
        </div>

        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.problemCard}>
              <div className={styles.icon}>{problem.icon}</div>
              <h3 className={styles.problemTitle}>{problem.title}</h3>
              <p className={styles.problemDescription}>{problem.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.encouragementBanner}>
          <div className={styles.bannerBackground}>
            <div
              className={styles.circle}
              style={{ top: "10%", left: "5%" }}
            ></div>
            <div
              className={styles.circle}
              style={{ top: "60%", right: "8%" }}
            ></div>
            <div
              className={styles.circle}
              style={{ bottom: "15%", left: "15%" }}
            ></div>
          </div>

          <div className={styles.bannerContent}>
            <div className={styles.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={styles.sparkleIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22l-.394-1.433a2.25 2.25 0 00-1.423-1.423L13.25 19l1.433-.394a2.25 2.25 0 001.423-1.423L16.5 16l.394 1.433a2.25 2.25 0 001.423 1.423L19.75 19l-1.433.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>

            <h3 className={styles.encouragementText}>
              Saatnya Memberikan Perhatian Lebih untuk Kasur Anda
            </h3>

            <p className={styles.subText}>
              Tidur berkualitas dimulai dari kasur yang sehat dan nyaman
            </p>

            <div className={styles.decorativeElements}>
              <span className={styles.dot}></span>
              <span className={styles.line}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
