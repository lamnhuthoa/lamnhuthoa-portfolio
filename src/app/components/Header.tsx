"use client";

import React from 'react';
import styles from '../styles/Header.module.scss'; // Import SCSS Module
import { Tooltip } from 'react-tooltip';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={`${styles.logoContainer}`}>
                    <Image src={'/images/logo/android-chrome-512x512.png'} alt={'logo'} width={100} height={0} layout="intrinsic" />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#introduction">About me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            {/* <a
                                data-tooltip-id="resume-tooltip"
                                data-tooltip-content="Download Resume"
                                className={styles['resume-button']}
                                href="/files/CV_Hoa_Lam.pdf"
                                download="CV_Hoa_Lam.pdf"
                                rel="noopener noreferrer"
                            > */}
                            <a
                                // data-tooltip-id="resume-tooltip"
                                // data-tooltip-content="Download CV"
                                className={styles['resume-button']}
                                href="https://drive.google.com/file/d/1rdp-O3M2EuKC86DA95KI1PSb0RKvcacJ/view?usp=sharing"
                                rel="noopener noreferrer"
                                target='_blank'
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Tooltip id="resume-tooltip" place="bottom" className={`${styles.tooltip}`} />
        </header>
    );
};

export default Header;
