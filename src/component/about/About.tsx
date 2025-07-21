"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import MissionImage from "../../assets/ourmission.jpg";
import DirectorImage1 from "../../assets/director/director1.png"; 
import DirectorImage2 from "../../assets/director/director2.png"; 
import DirectorImage3 from "../../assets/director/director3.png";

const values = [
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "Working together to achieve greater impact.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Building long-term solutions for lasting change.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Embracing new ideas to empower communities.",
  },
];

const milestones = [
  { year: "2023", label: "Founded" },
  { year: "50+", label: "Projects" },
];

const directors = [
  {
    image: DirectorImage1,
    name: "Anuradha Kumari",
    bio: "Leading with vision and determination, Anuradha focuses on sustainable development and community empowerment initiatives.",
  },
  {
    image: DirectorImage2,
    name: "Kanchan Devi",
    bio: "Passionate about education and skill development, Kanchan drives programs that create opportunities for underprivileged youth.",
  },
  {
    image: DirectorImage3,
    name: "Indu Devi",
    bio: "Specializing in women empowerment, Indu leads initiatives that promote gender equality and economic independence.",
  },
];

interface AboutProps {
  isFullPage?: boolean;
}

const About = ({ isFullPage = false }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.querySelector(`.${styles.about}`);
    if (element) observer.observe(element);
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
              Ditvi Foundation is dedicated to empowering communities through
              sustainable development, education, and women empowerment. We
              believe in creating lasting social impact by fostering
              collaboration, innovation, and inclusivity.
            </p>
            <div className={styles.values}>
              {values.map((v) => (
                <div className={styles.valueItem} key={v.title}>
                  <span className={styles.valueIcon} aria-hidden="true">
                    {v.icon}
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.milestones}>
              {milestones.map((m) => (
                <div className={styles.milestone} key={m.year}>
                  <span className={styles.year}>{m.year}</span>
                  <p>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={MissionImage}
                alt="Ditvi Foundation Mission"
                className={styles.image}
                fill
                priority={isFullPage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.directors}>
          {directors.map((director) => (
            <div className={styles.directorCard} key={director.name}>
              <div className={styles.directorPhoto}>
                <Image
                  src={director.image}
                  alt={`${director.name}, Director`}
                  className={styles.directorImg}
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className={styles.directorDetails}>
                <span className={styles.directorRole}>Director</span>
                <h3 className={styles.directorName}>{director.name}</h3>
                <p className={styles.directorBio}>{director.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
