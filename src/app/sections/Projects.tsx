import React from 'react';
import Card from '../components/Card'; // Adjust the path if necessary
import styles from '../styles/Projects.module.scss';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1, its objectives, and outcomes.',
    image: 'https://via.placeholder.com/300', // Replace with your image URL
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2, its objectives, and outcomes.',
    image: 'https://via.placeholder.com/300', // Replace with your image URL
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3, its objectives, and outcomes.',
    image: 'https://via.placeholder.com/300', // Replace with your image URL
    link: 'https://example.com/project3',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={`py-16 ${styles.container}`}>
      <h2 className={`text-3xl font-bold text-primary ${styles.title}`}>My Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
