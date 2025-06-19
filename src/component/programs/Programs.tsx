"use client";

import { useState, useEffect } from 'react';
import { programs } from '@/data/programs';
import ProgramCard from './ProgramCard';
import styles from './programs.module.css';

interface ProgramsProps {
  isFullPage?: boolean;
}

const Programs = ({ isFullPage = false }: ProgramsProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', ...new Set(programs.map(prog => prog.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.programs}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredPrograms = activeCategory === 'All'
    ? programs
    : programs.filter(prog => prog.category === activeCategory);

  return (
    <section className={`${styles.programs} ${isFullPage ? styles.fullPage : ''} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our <span className={styles.highlight}>Programs</span>
        </h2>
        <p className={styles.subheading}>
          Discover how we&apos;re making a difference in communities through our various initiatives
        </p>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;