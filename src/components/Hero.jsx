import "../styles/Hero.css"
import { useEffect, useState } from 'react';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const roles = [
        'Electronics Engineering Student',
        'Software Developer',
        'Full-Stack Developer',
        'AI/ML Enthusiast'
    ];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const shouldDelete = isDeleting;
        const shouldType = !isDeleting && displayText !== currentRole;
        const shouldPause = !isDeleting && displayText === currentRole;

        if (shouldPause) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (shouldDelete) {
            if (displayText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                return;
            }

            setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
            }, 50);
            return;
        }

        if (shouldType) {
            setTimeout(() => {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
            }, 100);
        }
    }, [displayText, currentRoleIndex, isDeleting, roles]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="Hero">
            <div className="hero-container">
                <div className="hero-status">
                    <span className="status-dot"></span>
                    Available for opportunities
                </div>

                <h1 className="hero-title">
                    Hi, I'm Noppanut Maiprot
                </h1>

                <h2 className="hero-subtitle">
                    <span className="typing-text">{displayText}</span>
                </h2>

                <p className="hero-description">
                    Passionate about creating innovative solutions through code.
                    Currently studying Electronics Engineering at KMUTNB with expertise
                    in web development, mobile apps, and AI/ML technologies.
                </p>

                <div className="hero-actions">
                    <button
                        className="hero-btn hero-btn-primary"
                        onClick={() => scrollToSection('projects')}
                    >
                        View My Work
                    </button>
                    <button
                        className="hero-btn hero-btn-secondary"
                        onClick={() => scrollToSection('contact')}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero