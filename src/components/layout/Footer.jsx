import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Zishuo Liu. All Rights Reserved.</p>
                <div className="social-links">
                    {/* Add social links here if needed, or keep it simple */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
