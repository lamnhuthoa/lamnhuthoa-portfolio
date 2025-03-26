import React from 'react'
import styles from '../styles/Gallery.module.scss'
import Image from 'next/image'

interface GalleryImage {
    url: string,
    desc: string
}

const images: GalleryImage[] = [
    {
        url: '/images/gallery-images/DSC09955.JPG',
        desc: 'New York 2025'
    },
]

const Gallery = () => {
    return (
        <section id="gallery" className={`py-16 ${styles.container}`}>
            <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Gallery</h2>
            <div className={`${styles.galleryContainer}`}>
                <div className={`${styles.innerContainer}`}>
                    {images.map((img) => {
                        return (
                            <div key={img.url} className={`${styles.imgContainer}`}>
                                <div className={`${styles.imageItem}`}>
                                    <Image src={img.url} alt={img.desc} width={400} height={300} layout="intrinsic" />
                                    <div className={`${styles.description}`}>
                                        {img.desc}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Gallery