"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import MissionImage from "../../assets/ourmission.jpg";

interface AboutProps {
  isFullPage?: boolean;
}

const About = ({ isFullPage = false }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.about}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.about} ${isFullPage ? styles.fullPage : ""} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Our <span className={styles.highlight}>Mission</span>
            </h2>
            <p className={styles.description}>
              At Ditvi Foundation, we believe in creating lasting positive
              change through sustainable community development and education.
              Our mission is to empower communities and transform lives.
            </p>

            <div className={styles.values}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>💡</div>
                <h3>Innovation</h3>
                <p>Creating sustainable solutions for community challenges</p>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Collaboration</h3>
                <p>Working together to achieve greater impact</p>
              </div>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>♻️</div>
                <h3>Sustainability</h3>
                <p>Building long-term solutions for lasting change</p>
              </div>
            </div>

            <div className={styles.milestones}>
              <div className={styles.milestone}>
                <span className={styles.year}>2023</span>
                <p>Foundation Established</p>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2023</span>
                <p>First Community Project</p>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2024</span>
                <p>National Recognition</p>
              </div>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={MissionImage}
                alt="Ditvi Foundation Impact"
                fill
                className={styles.image}
                priority={isFullPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
