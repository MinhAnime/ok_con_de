// src/components/Certifications.tsx
import { certifications } from '../data/cvData';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Chứng chỉ & Ngoại ngữ</h2>
      <div className={styles.certContainer}>
        <div className={styles.certCard}>
          <h3>Ngoại ngữ</h3>
          <p>{certifications.language}</p>
        </div>
        <div className={styles.certCard}>
          <h3>Chứng chỉ chuyên môn</h3>
          <ul>
            {certifications.professional.map((cert, index) => (
              <li key={index}>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}