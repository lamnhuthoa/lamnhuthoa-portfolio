import React from 'react';
import styles from '../styles/Footer.module.scss'; // Import SCSS Module

const Footer = () => {
    const data = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/lamnhuthoa',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/lamnhuthoa',
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/@lamnhuthoa',
        },
        {
            name: 'SoundCloud',
            url: 'https://soundcloud.com/hwa-lam',
        },
        {
            name: 'Email',
            url: 'mailto:hoalamnhut@gmail.com',
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <p className={styles.copyRight}>&copy; {new Date().getFullYear()} Built by Hoa Lam</p>
                <div className={styles['social-links']}>
                    {data.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer