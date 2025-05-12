'use client'

import React, { Fragment } from 'react'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

interface ProjectNotFounndProps {
    styles: { [key: string]: string }
}

const ProjectNotFound = (props: ProjectNotFounndProps) => {
    const { styles } = props;

    return (
        <Fragment>
            <div className={`${styles.projectContainer} bg-light-gray text-primary-color`}>
                <div className={`${styles.headerContainer}`}>
                    <Header pageType='Page Not Found' page={`${name}`} />
                </div>

                <div className={`${styles.projectContentContainer}`}>
                    <div className={`${styles.projectContent}`}>
                        <p className={`${styles.projectDescription}`}>
                            Project not found.
                        </p>
                    </div>
                </div>

                <div className={`${styles.footerContainer}`}>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectNotFound