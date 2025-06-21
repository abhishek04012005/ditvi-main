import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css";
import Image from "next/image";
import DitviLogo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.section}>
            <div className={styles.logoSection}>
              <div className={styles.logoWrapper}>
                <Image
                  src={DitviLogo}
                  alt="Ditvi Foundation Logo"
                  className={styles.logoImage}
                />
              </div>
            </div>
            <p className={styles.aboutText}>
              Empowering communities through sustainable development and
              education. Join us in making a positive impact on society.
            </p>
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
                href="https://in.pinterest.com/ditvifoundation"
                className={styles.socialLink}
                aria-label="Follow us on Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon />
              </a>
              <a
                href="https://youtube.com/@ditvifoundation"
                className={styles.socialLink}
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/programs">Our Programs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📍</span>
                Near B.D College, Mithapur, Patna, 800001
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                +91 9263767441
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                care@ditvi.org
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Ditvi Foundation. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
