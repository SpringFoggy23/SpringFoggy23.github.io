import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Layers, AlertTriangle } from 'lucide-react';
import projects from '../data/projects';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './ProjectDetail.css';


const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useDocumentTitle(project ? project.title : 'Project Details');

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Project not found</h2>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <Link to="/projects" className="back-link">
                <ArrowLeft size={20} /> Back to Projects
            </Link>

            <header className="project-header">
                <h1>{project.title}</h1>
                <p className="subtitle">{project.subtitle}</p>

                <div className="project-meta">
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="meta-link">
                            <Github size={20} /> GitHub
                        </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="meta-link">
                            <Globe size={20} /> Live Demo
                        </a>
                    )}
                </div>
            </header>

            <section className="project-section">
                <h2>Overview</h2>
                <p>{project.description}</p>
            </section>

            {/* Gallery Grid */}
            <section className="project-section">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {project.images && project.images.map((img, index) => (
                        <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
                    ))}
                </div>
            </section>

            {/* Technical Stack */}
            {project.details?.stack && (
                <section className="project-section">
                    <h2><Layers size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Technical Stack</h2>
                    <div className="stack-grid">
                        {project.details.stack.map((item, index) => (
                            <span key={index} className="stack-badge">
                                {item.name} <small style={{ opacity: 0.7 }}>({item.type})</small>
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Timeline */}
            {project.details?.timeline && (
                <section className="project-section">
                    <h2><Calendar size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Project Timeline</h2>
                    <div className="timeline">
                        {project.details.timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-date">{item.date}</div>
                                <div className="timeline-phase">{item.phase}</div>
                                <div className="timeline-desc">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Key Challenges */}
            {project.details?.challenges && (
                <section className="project-section">
                    <h2><AlertTriangle size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Key Challenges</h2>
                    <div className="challenges-grid">
                        {project.details.challenges.map((challenge, index) => (
                            <div key={index} className="challenge-card">
                                <h3>{challenge.title}</h3>
                                <p>{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
};

export default ProjectDetail;
