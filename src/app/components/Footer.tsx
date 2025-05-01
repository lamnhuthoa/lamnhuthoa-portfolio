import React from 'react';
import styles from '../styles/Footer.module.scss'; // Import SCSS Module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <p>&copy; {new Date().getFullYear()} Built by Hoa Lam</p>
                <div className={styles['social-links']}>
                    <a href="https://www.linkedin.com/in/lamnhuthoa" target="_blank" className={styles["social-link"]}>LinkedIn</a>
                    <span className={styles["separator"]}>•</span>
                    <a href="https://github.com/lamnhuthoa" target="_blank" className={styles["social-link"]}>GitHub</a>
                    <span className={styles["separator"]}>•</span>
                    <a href="https://www.youtube.com/@lamnhuthoa" target="_blank" className={styles["social-link"]}>Youtube</a>
                    <span className={styles["separator"]}>•</span>
                    <a href="https://soundcloud.com/hwa-lam" target="_blank" className={styles["social-link"]}>SoundCloud</a>
                    <span className={styles["separator"]}>•</span>
                    <a href="mailto:hoalamnhut@gmail.com" className={styles["social-link"]}>Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer