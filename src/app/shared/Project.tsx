'use client'

import React, { Fragment } from 'react'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { NAVIGATION } from '@/app/constants/navigation'
import { usePathname } from 'next/navigation'
import { projects } from '@/app/sections/Projects'
import PhotoGallery from '@/app/shared/PhotoGallery'
import { Tooltip } from 'react-tooltip';
import ProjectNotFound from './ProjectNotFound'

export interface ProjectProps {
    styles: { [key: string]: string }
}

const Project = (props: ProjectProps) => {
    const { styles } = props;
    const pathname = usePathname()
    const label = pathname.split('/')[3];
    const projectConstant = NAVIGATION.projects[label];
    const { name, imgDir } = projectConstant;
    const projectData = projects.find((project) => project.label === label);

    if (!projectData) {
        return <ProjectNotFound styles={styles} />
    }

    const {
        active,
        hasDemoWebsite,
        hasSourceCode,
        link,
        sourceCodeLink,
        description,
        extendedContent,
        technologies,
        features,
        images,
        category,
    } = projectData;

    return (
        <Fragment>
            <div className={`${styles.projectContainer} bg-light-gray text-primary-color`}>
                <div className={`${styles.headerContainer}`}>
                    <Header pageType="Project" page={`${name}`} />
                </div>

                <div className={`${styles.projectContentContainer}`}>
                    <div className={`${styles.projectContent}`}>
                        <div className={`${styles.section}`}>
                            <h1 className={`${styles.sectionTitle}`}>
                                <span>Overview</span>
                                <div className={`${styles.projectLinksWrapper}`}>
                                    {active && (
                                        <div className={`${styles['project-links-wrapper']}`}>
                                            {hasDemoWebsite && (
                                                <a
                                                    data-tooltip-id="source-code-link-tooltip"
                                                    data-tooltip-content="Website"
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${styles['link']} flex items-center gap-2`}
                                                >
                                                    <p>{category != 'GAME' ? 'Try Out' : 'Play Game'}</p>
                                                </a>
                                            )}
                                            {hasSourceCode && (
                                                <a
                                                    data-tooltip-id="source-code-link-tooltip"
                                                    data-tooltip-content="Repository"
                                                    href={sourceCodeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${styles['link']} flex items-center gap-2`}
                                                >
                                                    <p>Repository</p>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </h1>
                            <div className={`${styles.projectDescription}`}>
                                <div>{description}</div>
                                <br />
                                <div>{extendedContent}</div>
                            </div>

                        </div>
                        {technologies.length > 0 && (
                            <div className={`${styles.section}`}>
                                <h1 className={`${styles.sectionTitle}`}>Technologies</h1>
                                <div className={`${styles.technologiesList}`}>
                                    {technologies?.map((technology, index) => (
                                        <p key={index} className={`${styles.technologyItem}`}>
                                            <span>{technology}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {features.length > 0 && (
                            <div className={`${styles.section}`}>
                                <h1 className={`${styles.sectionTitle}`}>Features</h1>
                                <div className={`${styles.featuresList}`}>
                                    {features?.map((feature, index) => (
                                        <p key={index} className={`${styles.featureItem}`}>
                                            <span>{feature}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {images.length > 0 && (
                            <div className={`${styles.section}`}>
                                <h1 className={`${styles.sectionTitle}`}>Project Gallery</h1>
                                <div className={`${styles.projectGallery}`}>
                                    <PhotoGallery photos={images.map(image => {
                                        return {
                                            src: `${imgDir}${image}`,
                                            width: 600,
                                            height: 300,
                                            alt: image,
                                        }
                                    })} />
                                </div>
                            </div>
                        )}
                        <div className={`${styles.section}`}>

                        </div>
                    </div>
                </div>

                <div className={`${styles.footerContainer}`}>
                    <Footer />
                </div>
            </div>
            <Tooltip id="source-code-link-tooltip" place="bottom" className='tooltip' />
        </Fragment>
    )
}

export default Project