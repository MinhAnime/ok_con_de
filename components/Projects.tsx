// src/components/Projects.tsx
import { projects } from '../data/cvData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Dự án & Kinh nghiệm</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.projectDate}>{project.date}</span>
            </div>
            <p className={styles.projectRole}>{project.role}</p>
            
            <div className={styles.techStack}>
              {project.tech.map((techItem, index) => (
                <span key={index} className={styles.techTag}>
                  {techItem}
                </span>
              ))}
            </div>

            <ul className={styles.descriptionList}>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}