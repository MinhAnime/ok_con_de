// src/components/Skills.tsx
import { skills } from '../data/cvData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Kỹ năng</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <h3>Ngôn ngữ lập trình</h3>
          <p>{skills.languages}</p>
        </div>
        <div className={styles.skillCategory}>
          <h3>Backend</h3>
          <p>{skills.backend}</p>
        </div>
        <div className={styles.skillCategory}>
          <h3>Frontend</h3>
          <p>{skills.frontend}</p>
        </div>
        <div className={styles.skillCategory}>
          <h3>Cơ sở dữ liệu</h3>
          <p>{skills.databases}</p>
        </div>
        <div className={styles.skillCategory}>
          <h3>Hệ điều hành & Công cụ</h3>
          <p>{skills.tools}</p>
        </div>
      </div>
    </section>
  );
}