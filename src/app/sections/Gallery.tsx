import React from 'react'
import styles from '../styles/Gallery.module.scss'
import Image from 'next/image'

interface GalleryImage {
    src: string,
    desc: string,
}

const images: GalleryImage[] = [
    {
        src: '/images/gallery/bosch-run-2025.jpeg',
        desc: 'BOSCH Run 2025 • Global City, Thu Duc, Ho Chi Minh',
    },
    {
        src: '/images/gallery/metaverse-workshop-presenting-virtual-office-jan-2024.JPG',
        desc: 'Metaverse Worksop (Jan 2024) - Me pitching the future like it’s Shark Tank: VR edition.',
    },
    {
        src: '/images/gallery/work-etown-building-dawn-2022.JPG',
        desc: 'Etown at Dusk (2022) • When deadlines fade into city lights.',
    },
    {
        src: '/images/gallery/hobby-piano-playing-caligraphy-event.JPG',
        desc: 'Playing piano at a Vietnamese Calligraphy Event',
    },
    {
        src: '/images/gallery/metaverse-workshop-brainstorming-next-apps.jpg',
        desc: 'Brainstorming Metaverse apps • AKA arguing over whose app looks cooler.',
    },
    {
        src: '/images/gallery/life-cafe-la-viet-film.JPG',
        desc: 'Coffee Break at Là Việt • Brew-tiful moment of peace & beans.',
    },
    {
        src: '/images/gallery/metaverse-demo-day-apr-2024.jpeg',
        desc: 'Demo Day (Apr 2024) • Metaverse Virtual Office live!',
    },
    {
        src: '/images/gallery/tc-event-christmas-2024.JPG',
        desc: 'Bosch Christmas 2024 • Recording songs, spreading cheer, trying not to go off-key.',
    },
    {
        src: '/images/gallery/travel-dalat-tuyen-lam-lake-jul-2024.JPG',
        desc: 'Tuyền Lâm Lake, Dalat • Escaping code, embracing clouds.',
    },
    {
        src: '/images/gallery/metaverse-virtual-office-config-animation-full-body-character.jpeg',
        desc: 'Character rigging in the Metaverse • when animation makes you feel alive (literally).',
    },
    {
        src: '/images/gallery/work-etown-2-building.JPG',
        desc: 'Break time • Etown 2 Building, Ho Chi Minh City',
    }
]

const Gallery = () => {
    return (
        <section id="gallery" className={`py-16 ${styles.container}`}>
            <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>Gallery</h2>
            <div className={`${styles.galleryContainer}`}>
                <div className={`${styles.wrapper}`}>
                    {images.map((img) => {
                        return (
                            <figure key={img.src} className={`${styles.imgContainer}`}>
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