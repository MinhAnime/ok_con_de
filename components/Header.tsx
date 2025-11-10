// src/components/Header.tsx
import { personalInfo } from '../data/cvData';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header id="home" className={styles.header}>
      <h1 className={styles.name}>{personalInfo.name}</h1>
      <h2 className={styles.title}>{personalInfo.title}</h2>
      <div className={styles.contactLinks}>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href={`mailto:${personalInfo.email}`}>
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href={`tel:${personalInfo.phone}`}>
          <i className="fas fa-phone"></i> Phone
        </a>
      </div>
      <div className={styles.scrollDown}>
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </header>
  );
}