import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';
import { PetProject } from '../sections/Projects';
import { Tooltip } from 'react-tooltip';

interface CardProps {
    project: PetProject
}

const Card = (props: CardProps) => {
    const { image, title, description, link, active, hasSourceCode, sourceCodeLink } = props.project;

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
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!active ? `project-repo ${styles.projectNotActive}` : `project-repo`}
                        >
                            <img className={styles['icon']} src='/github-mark.svg' />
                        </a>
                        <a
                            data-tooltip-id="source-code-link-tooltip"
                            data-tooltip-content="Website"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!active ? `project-repo ${styles.projectNotActive}` : `project-repo`}
                        >
                            <img className={styles['icon']} src='/link-external.svg' />
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
