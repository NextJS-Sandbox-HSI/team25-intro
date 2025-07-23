// components/Footer/Footer.tsx
import styles from '../dendysadhewo.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Dendy Sadhewo. All rights reserved.</p>
    </footer>
  );
}
