// src/components/Summary.tsx
import { summary } from '../data/cvData';
import styles from './Summary.module.css';

export default function Summary() {
  return (
    <section id="about" className="section"> {/* Đổi ID thành 'about' */}
      <h2 className="section-title">Giới thiệu</h2>
      <p className={styles.summaryText}>
        <i className={`fas fa-quote-left ${styles.quoteIcon}`}></i> {/* Thêm icon */}
        {summary}
        <i className={`fas fa-quote-right ${styles.quoteIcon}`}></i> {/* Thêm icon */}
      </p>
    </section>
  );
}