"use client";

import { useState, useEffect } from 'react';
import styles from './terms.module.css';

interface TermsProps {
  isFullPage?: boolean;
}

const Terms = ({ isFullPage = false }: TermsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.terms} ${isFullPage ? styles.fullPage : ''} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: June 19, 2025</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Ditvi Foundation website and services, 
              you accept and agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services Description</h2>
            <p>
              Ditvi Foundation provides community development and educational 
              services. We reserve the right to modify or discontinue any 
              service without notice.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. User Responsibilities</h2>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain confidentiality of account information</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Donations and Payments</h2>
            <p>
              All donations are final and non-refundable unless required by law. 
              We use secure payment processing systems for all transactions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website is the property of Ditvi Foundation 
              and protected by copyright laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              Ditvi Foundation shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued 
              use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
              <br />
              <a href="mailto:legal@ditvifoundation.org">legal@ditvifoundation.org</a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;