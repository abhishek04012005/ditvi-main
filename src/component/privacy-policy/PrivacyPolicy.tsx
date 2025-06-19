"use client";

import { useState, useEffect } from 'react';
import styles from './privacy-policy.module.css';

interface PrivacyPolicyProps {
  isFullPage?: boolean;
}

const PrivacyPolicy = ({ isFullPage = false }: PrivacyPolicyProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.privacyPolicy} ${isFullPage ? styles.fullPage : ''} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: June 19, 2025</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              At Ditvi Foundation, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Donation history</li>
            </ul>

            <h3>Non-Personal Information</h3>
            <ul>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Processing donations</li>
              <li>Communicating about our programs</li>
              <li>Sending newsletters and updates</li>
              <li>Improving our services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:care@ditvi.org">care@ditvi.org</a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;