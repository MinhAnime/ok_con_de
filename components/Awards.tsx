// src/components/Awards.tsx
import { awards } from '../data/cvData';
import styles from './Awards.module.css';

export default function Awards() {
  return (
    <section id="awards" className="section">
      <h2 className="section-title">Giải thưởng</h2>
      <div className={styles.awardsList}>
        {awards.map((award, index) => (
          <div key={index} className={styles.awardCard}>
            <h3>{award.title}</h3>
            <p>{award.organization}</p>
            <span className={styles.date}>{award.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}