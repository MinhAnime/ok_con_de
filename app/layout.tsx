// src/app/layout.tsx
import type { Metadata } from 'next';
import React from 'react';
import { Inter, Raleway, Montserrat } from 'next/font/google'; // <-- THÊM DÒNG NÀY

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { personalInfo, summary } from '../data/cvData';

// CẤU HÌNH CÁC FONT
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: summary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // THÊM CÁC CLASS FONT VÀO THẺ HTML
    <html lang="vi" className={`${inter.variable} ${raleway.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}