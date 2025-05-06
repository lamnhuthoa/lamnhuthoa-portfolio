import React, { useState } from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';
import { PetProject } from '../sections/Projects';
import { Tooltip } from 'react-tooltip';

interface CardProps {
    project: PetProject
}

const Card = (props: CardProps) => {
    const { image, title, description, link, active, hasDemoWebsite, sourceCodeLink, hasSourceCode, extendedContent } = props.project;
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles.card}>
            <div className={`${styles['card-image']}`}>
                <Image width={400} height={0} src={image} alt={title} />
            </div>
            <div className={`${styles['card-body']}`}>
                <code>{title}</code>
                {active && (
                    <div className={`${styles['project-links-wrapper']}`}>
                        {hasDemoWebsite && (
                            <a
                                data-tooltip-id="source-code-link-tooltip"
                                data-tooltip-content="Website"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-repo`}
                            >
                                <Image width={30} height={30} className={styles['icon']} src='/link-external.svg' alt="website-icon" />
                            </a>
                        )}
                        {hasSourceCode && (
                            <a
                                data-tooltip-id="source-code-link-tooltip"
                                data-tooltip-content="Repository"
                                href={sourceCodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-repo`}
                            >
                                <Image width={30} height={30} className={styles['icon']} src='/github-mark.svg' alt="repository-icon" />
                            </a>
                        )}
                    </div>
                )}
                <div>
                    {description}
                    {!showMore && extendedContent && (
                        <span className="text-blue-500 cursor-pointer" onClick={() => setShowMore(true)} >
                            See more
                        </span>
                    )}
                    {showMore && (
                        <div>
                            {extendedContent}
                            <span className="text-blue-500 cursor-pointer" onClick={() => setShowMore(false)}>
                                See less
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <Tooltip id="source-code-link-tooltip" place="bottom" className={`${styles.tooltip}`} />
        </div>
    );
};

export default Card;
