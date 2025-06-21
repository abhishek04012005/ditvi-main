// Contact.tsx
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

const SOCIAL_LINKS = [
  {
    icon: FacebookIcon,
    url: "https://facebook.com/ditvifoundation",
    label: "Follow us on Facebook"
  },
  {
    icon: InstagramIcon,
    url: "https://instagram.com/ditvifoundation",
    label: "Follow us on Instagram"
  },
  {
    icon: PinterestIcon,
    url: "https://in.pinterest.com/ditvifoundation/",
    label: "Follow us on Pinterest"
  },
  {
    icon: YouTubeIcon,
    url: "https://www.youtube.com/@ditvifoundation",
    label: "Subscribe to our YouTube channel"
  }
];

const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Visit Us",
    details: ["Near B.D College, Mithapur", "Patna, 800001"]
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+91 9263767441"]
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: ["care@ditvi.org"]
  }
];

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
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className={styles.contactItem}>
                  <div className={styles.icon}>{info.icon}</div>
                  <div>
                    <h3>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.social}>
              {SOCIAL_LINKS.map(({ icon: Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  className={styles.socialLink}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
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
