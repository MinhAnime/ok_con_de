// src/app/page.tsx
import Header from '../components/Header';
import Summary from '../components/Summary';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <>
      <Header />
      <Summary />
      <Projects />
      <Skills />
      <Education />
      <Awards />
      <Certifications />
    </>
  );
}