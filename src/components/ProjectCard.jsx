import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Globe, ArrowRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ id, title, description, image, tools, links }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tools">
                    {tools.map((tool, index) => (
                        <span key={index} className="tool-tag">
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="project-footer">
                    <div className="project-links">
                        {links.github && (
                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                        )}
                        {links.demo && (
                            <a href={links.demo} target="_blank" rel="noopener noreferrer">
                                <Globe size={20} />
                            </a>
                        )}
                    </div>
                    <Link to={`/projects/${id}`} className="details-link">
                        Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
