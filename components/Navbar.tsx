// src/components/Navbar.tsx
'use client'; 
import Link from 'next/link';
import styles from './Navbar.module.css';
import { personalInfo } from '../data/cvData';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="#home" className={styles.logo}>
        {personalInfo.name}
      </Link>
      <div className={styles.navLinks}>
        <Link href="#summary">Giới thiệu</Link>
        <Link href="#projects">Dự án</Link>
        <Link href="#skills">Kỹ năng</Link>
        <Link href="#education">Học vấn</Link>
        <Link href="#contact">Liên hệ</Link>
      </div>
    </nav>
  );
}