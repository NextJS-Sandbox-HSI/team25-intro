import styles from './kemalrizky.module.css'
import TypingText from './_components/TypingText';

export default function KemalRizky() {
    return(
      <div className={styles.page}>
        <TypingText 
          phrases={['Ahlan wa sahlan.', 'Welcome to my website.', 'Let us learn Next.js together!']}
        />
      </div>
    );  
} 