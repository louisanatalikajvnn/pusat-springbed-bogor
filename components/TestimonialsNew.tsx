import styles from "./TestimonialsNew.module.scss";

export default function TestimonialsNew() {
  const testimonials = [
    {
      name: "Ipang Saputra",
      rating: 5,
      date: "setahun lalu",
      text: "",
      photo: "I",
    },
    {
      name: "Sasa Sutedja",
      rating: 5,
      date: "3 tahun yang lalu",
      text: "",
      photo: "S",
    },
    {
      name: "Benedius Mikael",
      rating: 5,
      date: "3 tahun yang lalu",
      text: "",
      photo: "B",
    },
    {
      name: "Helbert Hoesada",
      rating: 5,
      date: "3 tahun yang lalu",
      text: "",
      photo: "H",
    },
    {
      name: "Altius Oriandy",
      rating: 5,
      date: "3 tahun yang lalu",
      text: "",
      photo: "A",
    },
    {
      name: "Varell Andrew",
      rating: 5,
      date: "3 tahun yang lalu",
      text: "",
      photo: "V",
    },
  ];

  return (
    <section id="testimoni" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Testimoni</h2>
          <p className={styles.subtitle}>Ulasan Customer dari Google Review</p>
          <div className={styles.ratingBadge}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className={styles.rating}>5.0</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{testimonial.photo}</div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.date}>{testimonial.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className={styles.cardStars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className={styles.reviewText}>{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className={styles.googleBadge}>
          <div className={styles.badgeContent}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className={styles.badgeText}>
              <div className={styles.badgeTitle}>Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
