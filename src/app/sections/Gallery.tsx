import React from 'react'
import styles from '../styles/Gallery.module.scss'
import Image from 'next/image'

interface GalleryImage {
    src: string,
    desc: string,
    vertical: boolean
}

const images: GalleryImage[] = [
    {
        src: '/images/gallery/Mugs in an antique shop - Providence - Rhode Island.JPG',
        desc: 'Mugs in an antique shop  • Providence, Rhode Island',
        vertical: false,
    },
    {
        src: '/images/gallery/Manhattan Bridge.JPG',
        desc: 'Manhattan Bridge',
        vertical: false,
    },
    {
        src: '/images/gallery/Back Bay Houses.JPG',
        desc: 'Back Bay Houses',
        vertical: true,
    },
    {
        src: '/images/gallery/Vessel - Hudson Yard, Manhattan.JPG',
        desc: 'Hudson Yard',
        vertical: true,
    },
    {
        src: '/images/gallery/Blanket of snow covering Boylston St..JPG',
        desc: 'Snow covering Boylston St.',
        vertical: true,
    },
    {
        src: '/images/gallery/Statue of Liberty.JPG',
        desc: 'Statue of Liberty • New York',
        vertical: true,
    },
    {
        src: '/images/gallery/Boylston Street.JPG',
        desc: 'An intersection on Boylston St.',
        vertical: true,
    },
    {
        src: '/images/gallery/Paramount Theatre - Boston - MA.JPG',
        desc: 'Paramount Theatre • Boston, Massachusetts',
        vertical: true,
    },
    {
        src: '/images/gallery/Fenway Park - Boston - MA.JPG',
        desc: 'Fenway Park',
        vertical: true,
    },
    {
        src: '/images/gallery/Northeastern University.JPG',
        desc: 'Northeastern University',
        vertical: true,
    },
    {
        src: '/images/gallery/New York Times Building.JPG',
        desc: 'New York Times Building',
        vertical: true,
    },
]

const Gallery = () => {
    return (
        <section id="gallery" className={`py-16 ${styles.container}`}>
            <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Gallery</h2>
            <div className={`${styles.galleryContainer}`}>
                <div className={`${styles.wrapper}`}>
                    {images.map((img) => {
                        return (
                            <figure key={img.src} className={`${styles.imgContainer} ${img.vertical ? styles.vertical : styles.horizontal}`}>
                                <Image src={img.src} alt={img.desc} width={400} height={300} layout="intrinsic" />
                                <div className={`${styles.description}`}>
                                    {img.desc}
                                </div>
                            </figure>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Gallery