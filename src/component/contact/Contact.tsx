"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface ContactProps {
  isFullPage?: boolean;
}

const Contact = ({ isFullPage = false }: ContactProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.contact}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.contact} ${isFullPage ? styles.fullPage : ""} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Get in <span className={styles.highlight}>Touch</span>
            </h2>
            <p className={styles.description}>
              Have questions about our programs or want to get involved?
              We&apos;d love to hear from you.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h3>Visit Us</h3>
                  <p>
                    Near B.D College, Mithapur
                    <br />
                    Patna, 800001
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9263767441</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h3>Email Us</h3>
                  <p>care@ditvi.org</p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <a
                href="https://facebook.com/ditvifoundation"
                className={styles.socialLink}
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/ditvifoundation"
                className={styles.socialLink}
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://in.pinterest.com/ditvifoundation/"
                className={styles.socialLink}
                aria-label="Follow us on Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon />
              </a>
              <a
                href="https://www.youtube.com/@ditvifoundation"
                className={styles.socialLink}
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
