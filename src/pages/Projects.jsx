import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Correct path
import projects from '../data/projects'; // Correct path
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Projects.css';

const Projects = () => {
    useDocumentTitle('Projects');
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tools={project.tools}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
