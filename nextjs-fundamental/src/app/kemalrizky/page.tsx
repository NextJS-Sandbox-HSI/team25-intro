import styles from './kemalrizky.module.css'

export default function KemalRizky() {
    return(
        <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.name}>Kemal Rizky Fadhlurrohman</h1>
        <hr className={styles.divider} />
        <p className={styles.bio}>
          Hi, I'm Kemal, currently living in Jakarta. My previous work involves building Internet of Things (IoT)
          products and managing research projects.
        </p>
        <p className={styles.bio}>
          I'm passionate about building impactful products and I'm looking forward to explore the realm of web development.
        </p>
        <div className={styles.keywords}>
          <span>🤖 IoT</span>
          <span>🍎 Prod Dev</span>
          <span>🧰 Project Management</span>
        </div>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/kemalrizky" target="_blank">LinkedIn</a>
          <a href="https://github.com/kemalrizky" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
    );  
} 