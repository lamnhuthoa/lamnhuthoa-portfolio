"use client"

import React, { useState } from 'react';
import Card from '../components/Card'; // Adjust the path if necessary
import styles from '../styles/Projects.module.scss';

export interface PetProject {
    title: string,
    description: string,
    image: string,
    link: string,
    active: boolean,
}

const projects: PetProject[] = [
    {
        title: 'Simon Game',
        description: `
            An engaging and interactive memory game developed 
            using JavaScript and jQuery, designed to challenge 
            players with progressively complex patterns. 
            A perfect blend of fun and cognitive training!
        `,
        image: '/images/projects/simon-game/simon-game-1.png', // Replace with your image URL
        link: 'https://lamnhuthoa.github.io/Simon-Game/',
        active: true,
    },
    // {
    //     title: 'Collaborative Whiteboard 🎨📌',
    //     description: `
    //         The Collaborative Whiteboard App is a real-time, 
    //         interactive digital whiteboard designed for seamless 
    //         collaboration. Built with React, TypeScript, WebSockets, 
    //         and Socket.IO, this app allows multiple users to draw, 
    //         write, and brainstorm together on a shared canvas.
    //     `,
    //     image: '/images/projects/collaborative-whiteboard/collaborative-whiteboard-1.png', // Replace with your image URL
    //     link: 'https://example.com/project2',
    //     active: false,
    // },
    {
        title: 'Youtube Video Summary Chatbot',
        description: `
            <p>A hackathon project my colleague and I built to apply what we learned in Bosch’s AI training course.</p>
            <ul>
                <li style="margin-left: 1rem">• React-based UI and Flask backend</li>
                <li style="margin-left: 1rem">• LangChain with Retrieval-Augmented Generation (RAG)</li>
                <li style="margin-left: 1rem">• Conversation history stored in PostgreSQL</li>
                <li style="margin-left: 1rem">• Text-to-Speech functionality</li>
            </ul>
        `,
        image: '/images/projects/collaborative-whiteboard/collaborative-whiteboard-1.png', // Replace with your image URL
        link: 'https://example.com/project3',
        active: false,
    },
    {
        title: 'Virtual Office',
        description: `
            A collection of VR applications, including:
            <ul>
                <li style="margin-left: 1rem">• Virtual Exhibition – 3D showcase of Bosch products </li>
                <li style="margin-left: 1rem">• Virtual Job Fair – Interactive recruitment experience</li>
                <li style="margin-left: 1rem">• Virtual Assistant – LLM-powered assistant in VR</li>
            </ul>
            Built as PoC projects during my Unity Learn training at Bosch, this app features inverse kinematics, fluid shaders, and AI integration.  
            It's my first VR/MR project—stay tuned for more immersive experiences!
        `,
        image: '/images/projects/collaborative-whiteboard/collaborative-whiteboard-1.png', // Replace with your image URL
        link: 'https://example.com/project3',
        active: false,
    },
    // {
    //     title: 'Project 5',
    //     description: 'A brief description of Project 3, its objectives, and outcomes.',
    //     image: 'https://via.placeholder.com/300', // Replace with your image URL
    //     link: 'https://example.com/project3',
    //     active: false,
    // },
    // {
    //     title: 'Project 6',
    //     description: 'A brief description of Project 3, its objectives, and outcomes.',
    //     image: 'https://via.placeholder.com/300', // Replace with your image URL
    //     link: 'https://example.com/project3',
    //     active: false,
    // },
];

const Projects = () => {
    const PROJECTS_PER_PAGE = 3;
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

    const handleShowMore = () => {
        if (visibleCount >= projects.length) {
            setVisibleCount(PROJECTS_PER_PAGE);
        } else {
            setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
        }
    };

    return (
        <section id="projects" className={`py-16 ${styles.container}`}>
            <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>My Projects</h2>
            <div className={`mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.innerContainer}`}>
                {projects.slice(0, visibleCount).map((project, index) => (
                    <Card
                        key={index}
                        project={project}
                    />
                ))}
            </div>
            {projects.length > PROJECTS_PER_PAGE && (
                <div className={`${styles.showMoreBtnContainer}`}>
                    <button className={`${styles.showMoreBtn}`} onClick={handleShowMore}>
                        {visibleCount >= projects.length ? "Hide All" : "Show More Projects"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
