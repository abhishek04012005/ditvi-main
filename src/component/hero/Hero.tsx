"use client";
import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Making a <span className={styles.highlight}>Difference</span>
            <br /> In Communities
          </h1>
          <p className={styles.description}>
            Join us in our mission to create positive change through education,
            sustainability, and community development initiatives.
          </p>
          <div className={styles.buttonGroup}>
           
            <Link href="/programs" className={styles.primaryButton}>
              Our Programs
            </Link>
          </div>
        </div>
        
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Lives Impacted</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Communities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;