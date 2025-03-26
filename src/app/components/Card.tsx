import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';

interface CardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const Card = (props: CardProps) => {
    const { image, title, description, link } = props;

    return (
        <div className={styles.card}>
            <div className={`${styles['card-image']}`}>
                <Image width={300} height={300} src={image} alt={title} />
            </div>
            <div className={`${styles['card-body']}`}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button>View Project</button>
                </a>
            </div>
        </div>
    );
};

export default Card;
