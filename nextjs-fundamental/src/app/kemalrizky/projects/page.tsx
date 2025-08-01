import styles from '../kemalrizky.module.css'

export default function KemalRizky() {
    return(
        <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.name}>Projects</h1>
        <hr className={styles.divider} />
        <p className={styles.bio}>
          Hi, I'm <span className={styles.bold}>Kemal Rizky Fadhlurrohman</span> , currently living in Jakarta. My previous work involved building Internet of Things (IoT)
          products and managing research projects.
        </p>
        <p className={styles.bio}>
          I'm passionate about building impactful technologies and I'm looking forward to explore the realm of web development.
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