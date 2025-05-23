"use client"

import React, { useState } from 'react';
import Card from '../components/Card'; // Adjust the path if necessary
import styles from '../styles/Projects.module.scss';

type ProjectCategory = 'GAME' | 'AI' | 'XR';

export interface IProject {
    title: string,
    label: string,
    description: string,
    image: string,
    link: string,
    active: boolean,
    hasDemoWebsite: boolean,
    hasSourceCode: boolean,
    images: string[],
    technologies: string[],
    features: string[],
    category: ProjectCategory,
    sourceCodeLink?: string,
    extendedContent?: string,
}

export const projects: IProject[] = [
    {
        title: 'Simon Game',
        label: 'simon-game',
        description: `
            An engaging and interactive memory game developed 
            using JavaScript and jQuery, designed to challenge 
            players with progressively complex patterns. 
            A perfect blend of fun and cognitive training!
        `,
        image: '/images/projects/simon-game/simon-game-1.png', // Replace with your image URL
        link: 'https://lamnhuthoa.github.io/Simon-Game/',
        active: true,
        hasDemoWebsite: true,
        hasSourceCode: true,
        sourceCodeLink: 'https://github.com/lamnhuthoa/Simon-Game',
        technologies: [
            'JavaScript',
            'jQuery',
            'HTML',
            'CSS',
        ],
        features: [
            'Interactive Game',
            'Progressive Difficulty',
            'Memory Challenge',
            'Sound Effects'
        ],
        images: [
            'simon-game-1.png',
            'simon-game-2.png',
            'simon-game-3.png',
        ],
        category: 'GAME',
    },
    {
        title: 'Video Summary Chatbot',
        label: 'video-summary-chatbot',
        description: `
            A two-week hackathon project my colleague and I developed to apply the skills we gained during an AI training course. 
            The application features a React-based user interface and a Flask backend. 
            It leverages LangChain's YouTube Loader, Retrieval-Augmented Generation (RAG), and a vector database for efficient semantic search and dynamic query handling.
        `,
        image: '/images/projects/video-summary-chatbot/video-summary-chatbot-1.png', // Replace with your image URL
        link: '',
        active: true,
        hasDemoWebsite: false,
        hasSourceCode: true,
        sourceCodeLink: 'https://github.com/lamnhuthoa/video-summary-chatbot',
        extendedContent: `
            We integrated advanced LLM technologies using Llama3 and the Ollama embedding model to provide accurate, context-aware responses. 
            The chatbot also saves and retrieves past conversation history for contextual continuity and includes text-to-speech functionality to enhance accessibility and interactivity.
        `,
        technologies: [
            'React',
            'Python',
            'Flask',
            'LangChain',
            'YouTube Loader',
            'Retrieval-Augmented Generation (RAG)',
            'Vector Database',
            'Llama3',
            'Ollama Embedding Model',
            'PostgreSQL',
        ],
        features: [
            'Video Summary',
            'Chatbot',
            'Text-to-Speech',
            'Conversation History',
            'Delete conversation',
            'Context-Aware Responses'
        ],
        images: [
            'video-summary-chatbot-1.png',
            'video-summary-chatbot-2.png',
            'video-summary-chatbot-4.png',
            'video-summary-chatbot-5.png',
            'video-summary-chatbot-6.png',
            'video-summary-chatbot-7.png',
        ],
        category: 'AI',
    },
    {
        title: 'Virtual Office',
        label: 'virtual-office',
        description: `
            A collection of VR applications developed using Unity and Blender, 
            featuring Final IK for realistic inverse kinematics. 
            The project includes a Virtual Exhibition showcasing Bosch products in 3D, 
            a Virtual Job Fair offering an interactive recruitment experience, 
            and a Virtual Assistant powered by LLMs for in-VR support. 
            These applications were designed to explore immersive solutions 
            within corporate environments and push the boundaries of interactive user experiences.
        `,
        image: '/images/projects/collaborative-whiteboard/collaborative-whiteboard-1.png', // Replace with your image URL
        link: 'https://example.com/project3',
        active: false,
        hasDemoWebsite: false,
        hasSourceCode: false,
        sourceCodeLink: '',
        extendedContent: `
            This is my first VR project since June 2023, built through self-learning on Unity Learn. 
            Featuring inverse kinematics, fluid shaders, and AI integration, 
            the app was later presented to the board of management, 
            where it received encouraging feedback as a potential direction for future solutions.
            More immersive ideas are on the way!
        `,
        technologies: [
            'Unity',
            'Blender',
            'Final IK',
            'C#',
            'Photon',
            'Oculus SDK',
            'Photon Voice',
            'Photon Pun 2',
        ],
        features: [
            'Virtual Exhibition',
            'Virtual Job Fair',
            'Inverse Kinematics',
            '3D Modeling',
            'Interactive Recruitment Experience',
        ],
        images: [],
        category: 'XR',
    },
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
