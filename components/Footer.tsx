// src/components/Footer.tsx
import { personalInfo } from '../data/cvData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.contactInfo}>
        <h3>Liên hệ</h3>
        <p>Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        <p>Phone: <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></p>
      </div>
      <div className={styles.socialLinks}>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} {personalInfo.name}. Được xây dựng bằng Next.js.</p>
      </div>
    </footer>
  );
}