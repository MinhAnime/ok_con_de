// src/components/Education.tsx
import { education } from '../data/cvData';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Học vấn</h2>
      <div className={styles.educationEntry}>
        <h3>{education.school}</h3>
        <p>{education.major}</p>
        <p className={styles.date}>{education.graduation}</p>
      </div>
    </section>
  );
}