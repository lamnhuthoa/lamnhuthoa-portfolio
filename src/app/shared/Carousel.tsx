import React, { useState } from 'react'
import styles from '../styles/Carousel.module.scss'
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export interface Photo {
    src: string;
    width: number;
    height: number;
    alt?: string;
    title?: string;
}

export interface PhotoGalleryProps {
    photos: Photo[];
}

const Carousel = (props: PhotoGalleryProps) => {
    const { photos } = props;
    const [slide, setSlide] = useState(0);
    const [loading, setLoading] = useState(true);

    const nexSlide = () => {
        if (slide === photos.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    const prevSlide = () => {
        if (slide === 0) {
            setSlide(photos.length - 1);
        } else {
            setSlide(slide - 1);
        }
    }

    return (
        <div className={`${styles.carousel}`}>
            <BsArrowLeftCircleFill
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={prevSlide}
            />
            {photos.map((item: Photo, index: number) => {
                return (
                    <React.Fragment key={index}>
                        {loading && <div className="spinner" />}
                        <Image
                            className={
                                `${styles.slide} 
                                ${slide !== index ? styles.slideHidden : ''} 
                                ${loading ? "loading" : "loaded"} `}
                            key={index}
                            src={item.src}
                            alt={item.alt!}
                            width={item.width}
                            height={item.height}
                            placeholder={"blurDataURL" in item ? "blur" : undefined}
                            onLoadingComplete={() => setLoading(false)}
                        />
                    </React.Fragment>
                )
            })}
            <BsArrowRightCircleFill
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={nexSlide}
            />
            <span className={`${styles.indicators}`}>
                {photos.map((_: Photo, index: number) => {
                    return (
                        <button
                            key={index}
                            className={`${slide === index ? styles.indicator : styles.indicatorInactive}`}
                            onClick={() => setSlide(index)}
                        >
                        </button>
                    )
                })}
            </span>
        </div>
    )
}

export default Carousel