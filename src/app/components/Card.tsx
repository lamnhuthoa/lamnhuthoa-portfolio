import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';
import { PetProject } from '../sections/Projects';
import { Tooltip } from 'react-tooltip';

interface CardProps {
    project: PetProject
}

const Card = (props: CardProps) => {
    const { image, title, description, link, active, sourceCodeLink } = props.project;

    return (
        <div className={styles.card}>
            <div className={`${styles['card-image']}`}>
                <Image width={400} height={0} src={image} alt={title} />
            </div>
            <div className={`${styles['card-body']}`}>
                <code>{title}</code>
                {active && (
                    <div className={`${styles['project-links-wrapper']}`}>
                        <a
                            data-tooltip-id="source-code-link-tooltip"
                            data-tooltip-content="Repository"
                            href={sourceCodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!active ? `project-repo ${styles.projectNotActive}` : `project-repo`}
                        >
                            <Image width={30} height={30} className={styles['icon']} src='/github-mark.svg' alt="repository-icon" />
                        </a>
                        <a
                            data-tooltip-id="source-code-link-tooltip"
                            data-tooltip-content="Website"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!active ? `project-repo ${styles.projectNotActive}` : `project-repo`}
                        >
                            <Image width={30} height={30} className={styles['icon']} src='/link-external.svg' alt="website-icon" />
                        </a>
                    </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: description }} />
                {/* <button>View Project</button> */}
            </div>
            <Tooltip id="source-code-link-tooltip" place="bottom" className={`${styles.tooltip}`} />
        </div>
    );
};

export default Card;
