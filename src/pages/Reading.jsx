import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Reading.css';

const Reading = () => {
    useDocumentTitle('Reading & Resume');
    // Note: PDF files should be in the 'public' folder.
    // e.g. /public/Resume.pdf -> in production it is just /Resume.pdf
    const resumeUrl = "/Resume.pdf";

    return (
        <div className="reading-container">
            <h1>Resume / Reading</h1>
            <p>View my resume below or <a href={resumeUrl} download="Zishuo_Liu_Resume.pdf">download here</a>.</p>
            <div className="pdf-viewer">
                <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume Viewer"
                >
                    <p>Your browser does not support PDFs. <a href={resumeUrl}>Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    );
};

export default Reading;
