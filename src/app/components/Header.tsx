"use client";

import React from 'react';
import styles from '../styles/Header.module.scss'; // Import SCSS Module
import { Tooltip } from 'react-tooltip';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Henry.</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#introduction">About me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a 
                data-tooltip-id="resume-tooltip"
                data-tooltip-content="Download Resume" 
                className={styles['resume-button']} 
                href="/files/CV_Hoa_Lam.pdf" 
                download="CV_Hoa_Lam.pdf"
                rel="noopener noreferrer"
              >
                Resume
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
