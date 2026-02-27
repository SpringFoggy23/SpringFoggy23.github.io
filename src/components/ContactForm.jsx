import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.comment.trim()) {
            setStatus({ type: 'error', message: 'Name and comment are required fields.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://visitor-api-953856592719.us-central1.run.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! Your comment has been sent.' });
                setFormData({ name: '', email: '', comment: '' });
            } else {
                throw new Error('Failed to send comment');
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-form-section">
            <div className="contact-form-container">
                <h2 className="section-title">Connect with me</h2>
                <p className="contact-subtitle">I'd love to hear from you! Voyager 1</p>

                {status.message && (
                    <div className={`status-message ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email (optional)"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Comment *</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            rows="4"
                            placeholder="What's on your mind?"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : (
                            <>
                                Send Message <Send size={16} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
