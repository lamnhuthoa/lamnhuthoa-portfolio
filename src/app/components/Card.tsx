import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';
import { PetProject } from '../sections/Projects';

interface CardProps {
    project: PetProject
}

const Card = (props: CardProps) => {
    const { image, title, description, link, active } = props.project;

    return (
        <div className={styles.card}>
            <div className={`${styles['card-image']}`}>
                <Image width={400} height={0} src={image} alt={title} />
            </div>
            <div className={`${styles['card-body']}`}>
                {active ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <code>{title}</code>
                    </a>
                ) : (
                    <a href='#' className={`${styles.projectNotActive}`}>
                        <code>{title}</code>
                    </a>
                )}

                <div dangerouslySetInnerHTML={{ __html: description }} />
                {/* <button>View Project</button> */}
            </div>
        </div>
    );
};

export default Card;
