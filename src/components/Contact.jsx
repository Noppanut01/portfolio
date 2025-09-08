import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="Contact">
            <div className="contact-container">
                <div className="title">Get In Touch</div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p>your.email@example.com</p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="contact-item">
                            <h3>Location</h3>
                            <p>Your City, Country</p>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">GitHub</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>
                        <div className="resume-section">
                            <h3>Resume & Portfolio</h3>
                            <p>Download my complete resume and portfolio</p>
                            <div className="resume-buttons">
                                <button className="resume-btn primary">Download Resume (PDF)</button>
                                <button className="resume-btn secondary">View Portfolio (PDF)</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;