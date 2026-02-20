// import React from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone, Download, ExternalLink, Fingerprint } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Home.css';

const Home = () => {
    useDocumentTitle('Home');
    return (
        <div className="resume-container">
            {/* Left Column: Profile, Skills, Contact, Education */}
            <aside className="resume-sidebar">
                <div className="profile-section">
                    <h1>Zishuo Liu</h1>
                    <p className="role-title">Full Stack ML Developer</p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <Mail size={16} />
                            <a href="mailto:zsliu@bu.edu">zsliu@bu.edu</a>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} />
                            <span>+1 8576059465</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={16} />
                            <span>Guangzhou, CN</span>
                        </div>
                        <div className="contact-item">
                            <Fingerprint size={16} />
                            <a href="https://orcid.org/0009-0001-5367-3423" target="_blank" rel="noopener noreferrer">ORCID: 0009-0001-5367-3423</a>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/SpringFoggy23" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/zishuoliu0300/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/zsliu_tom/" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="sidebar-section">
                    <h2>Education</h2>
                    <div className="edu-item">
                        <a href="https://www.bu.edu/academics/grs/" target="_blank" rel="noopener noreferrer" className="edu-link">
                            <h3>Boston University (BU) <ExternalLink size={12} className="inline-icon" /></h3>
                        </a>
                        <p>Graduate Study on Art & Science</p>
                        <span className="date">2024.09 - Present</span>
                    </div>
                    <div className="edu-item">
                        <a href="https://www.hkbu.edu.hk/" target="_blank" rel="noopener noreferrer" className="edu-link">
                            <h3>Beijing Normal–Hong Kong Baptist University (BNBU) <ExternalLink size={12} className="inline-icon" /></h3>
                        </a>
                        <p>Undergraduate Study</p>
                        <span className="date">2020.09 - 2024.01</span>
                    </div>
                    <div className="edu-item">
                        <h3>Hong Kong Baptist University</h3>
                        <p>B.S. (Honors) in Computer Science</p>
                        <a href="/public/Certificate.pdf" target="_blank" className="cert-link">View Certificate <ExternalLink size={12} /></a>
                    </div>
                </div>

                <div className="sidebar-section">
                    <h2>Skills</h2>
                    <div className="skills-list">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">C++</span>
                        <span className="skill-tag">Kotlin</span>
                        <span className="skill-tag">Matlab</span>
                        <span className="skill-tag">Apache Flink</span>
                        <span className="skill-tag">Apache Kafka</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">Linux</span>
                        <span className="skill-tag">Go</span>
                    </div>
                </div>

                <div className="sidebar-section">
                    <h2>Awards & Honor</h2>
                    <ul className="simple-list">
                        <li>2021/2024 Two times Scholarship of HKBU</li>
                        <li>2021-2022 Good Peer Mentor to the MCP</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Test Scores</h2>
                    <div className="test-item">
                        <strong>GRE:</strong> 322
                        <a href="/public/GRE_undergraduate.pdf" target="_blank" className="icon-link"><Download size={14} /></a>
                    </div>
                </div>
            </aside>

            {/* Right Column: Experience, Research */}
            <main className="resume-main">
                <section className="main-section">
                    <h2 className="section-title">Research Experience</h2>

                    <div className="experience-item">
                        <div className="exp-header">
                            <h3>Research Assistant</h3>
                            <a href="https://space.mit.edu/" target="_blank" rel="noopener noreferrer" className="exp-org-link">
                                MIT Kavli Institute for Astrophysics and Space Research <ExternalLink size={14} className="inline-icon" />
                            </a>
                        </div>
                        <p className="exp-meta">
                            Supervised by <a href="https://physics.mit.edu/faculty/mark-vogelsberger/" target="_blank" rel="noopener noreferrer" className="highlight-link">
                                Prof. Mark Vogelsberger <ExternalLink size={12} className="inline-icon" />
                            </a>
                        </p>
                        <ul className="exp-details">
                            <li>Developed a sophisticated neural network model for stock market prediction using Encoder-Decoder architecture.</li>
                            <li>Demonstrated superiority of the model over previous approaches.</li>
                        </ul>
                    </div>

                    <h3 className="sub-section-title">Publications</h3>
                    <ul className="publication-list">
                        <li>
                            <strong>Auto Encoder Based Abnormal Fluctuations Monitoring Method</strong><br />
                            Liuluofeng Jin, <strong>Zishuo Liu</strong>, Yifan Tang<br />
                            <em>2022 International Conference on Big Data, Information and Computer Network (BDICN)</em>
                        </li>
                        <li>
                            <strong>LLM for Complex Reasoning Task: An Exploratory Study in Fermi Problems</strong><br />
                            <strong>Zishuo Liu</strong>, Carlos Rabat Villarreal, Mostafa Rahgouy, Amit Das, Zheng Zhang, Chang Ren, Dongji Feng<br />
                            <em>2024 Arxiv</em>
                        </li>
                        <li>
                            <strong>Real-Time Thermal Defect Detection in Additive Manufacturing with Apache Flink</strong><br />
                            Yixin Lao*, Jingzhi Yan*, <strong>Zishuo Liu*</strong> (* equal contribution)<br />
                            <em>2025 ACM International Conference on Distributed and Event-Based Systems (DEBS)</em>
                        </li>
                    </ul>
                </section>

                <section className="main-section">
                    <h2 className="section-title">Professional Experience</h2>

                    <div className="experience-item">
                        <div className="exp-header">
                            <h3>Software Engineer</h3>
                            <a href="https://www.cmi.chinamobile.com/en/" target="_blank" rel="noopener noreferrer" className="exp-org-link">
                                China Mobile <ExternalLink size={14} className="inline-icon" />
                            </a>
                        </div>
                        <ul className="exp-details">
                            <li>Improved invoice verification and anomaly detection systems, enhancing accounting workflow efficiency.</li>
                            <li>Maintained and optimized a 1000+ staff attendance record database.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="exp-header">
                            <h3>Computer Vision Intern</h3>
                            <a href="https://vispect.com" target="_blank" rel="noopener noreferrer" className="exp-org-link">
                                Vispect <ExternalLink size={14} className="inline-icon" />
                            </a>
                        </div>
                        <ul className="exp-details">
                            <li>Worked on autonomous driving and object detection algorithms.</li>
                            <li>Conducted testing for hundreds of wireless products.</li>
                        </ul>
                    </div>
                </section>

                <section className="main-section">
                    <h2 className="section-title">Course Work</h2>
                    <ul className="exp-details">
                        <li>Information Web Search System (Python Flask)</li>
                        <li>Fee Counting System for Electronic Company (Java)</li>
                    </ul>
                </section>

                <section className="main-section">
                    <h2 className="section-title">Extracurricular Activities</h2>

                    <div className="experience-item">
                        <div className="exp-header">
                            <h3>Educational Tutor</h3>
                            <span className="exp-org">Xiangzhou, Guangdong</span>
                            <span className="date">2021.03 - 2023.06</span>
                        </div>
                        <ul className="exp-details">
                            <li>Tutored Mathematics, Chinese, and English for Junior to Senior high school students (Y12-Y18).</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="exp-header">
                            <h3>Head of Outreach Department</h3>
                            <span className="exp-org">CS & Tech Major Association</span>
                            <span className="date">2020.11 - 2022.03</span>
                        </div>
                        <ul className="exp-details">
                            <li>Assisted in organizing the 2021 Freshmen Welcome Party.</li>
                            <li>Coordinated CDS academic seminars and weekly speeches.</li>
                            <li>Managed promotion and advertisements for activities.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
