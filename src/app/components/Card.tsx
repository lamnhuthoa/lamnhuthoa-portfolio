import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';
import { IProject } from '../sections/Projects';
import { Tooltip } from 'react-tooltip';
import { useRouter } from 'next/navigation'
import { NAVIGATION } from '../constants/navigation';

interface CardProps {
    project: IProject
}

const Card = (props: CardProps) => {
    const {
        image,
        title,
        label,
        description,
        link,
        active,
        hasDemoWebsite,
        sourceCodeLink,
        hasSourceCode
    } = props.project;

    const router = useRouter();

    const handleToProjectPage = () => {
        router.push(NAVIGATION.projects[label].path);
    }

    return (
        <div className={styles.card}>
            <div className={`${styles['card-image']}`}>
                <Image width={400} height={0} src={image} alt={title} />
            </div>
            <div className={`${styles['card-body']}`}>
                <div className={`${styles['card-body-title']}`}>
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
                                >
                                    <Image
                                        width={30}
                                        height={30} className={styles['icon']} src='/link-external.svg' alt="website-icon" />
                                </a>
                            )}
                            {hasSourceCode && (
                                <a
                                    data-tooltip-id="source-code-link-tooltip"
                                    data-tooltip-content="Repository"
                                    href={sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image width={30} height={30} className={styles['icon']} src='/github-mark.svg' alt="repository-icon" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
                <div>
                    <div>
                        {description}
                    </div>
                    <br />
                    <span
                        className="text-teal-900 cursor-pointer hover:underline transition-colors"
                        onClick={() => handleToProjectPage()}
                    >
                        See more
                    </span>
                </div>
            </div>
            <Tooltip id="source-code-link-tooltip" place="bottom" className='tooltip' />
        </div>
    );
};

export default Card;
