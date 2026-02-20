import React, { useState, useRef, useEffect } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current && contentRef.current.scrollHeight > 90) {
            setShowButton(true);
        }
    }, [children]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <article className="blog-post">
            <h2>{title}</h2>
            <p className="date">{date}</p>

            <div
                className={`blog-preview ${isExpanded ? 'expanded' : ''}`}
                ref={contentRef}
                style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '90px' }}
            >
                {children}
            </div>

            {showButton && (
                <button className="read-more-btn" onClick={toggleExpand}>
                    {isExpanded ? 'Show less' : 'Read more'}
                </button>
            )}
        </article>
    );
};

export default BlogPost;
