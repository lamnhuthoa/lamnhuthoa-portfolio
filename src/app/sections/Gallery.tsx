import React from 'react'
import styles from '../styles/Gallery.module.scss'

const Gallery = () => {
  return (
    <section id="gallery" className={`py-16 ${styles.container}`}>
      <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Gallery</h2>
    </section>
  )
}

export default Gallery