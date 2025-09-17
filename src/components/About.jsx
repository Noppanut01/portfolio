function About() {
    const skills = [
        'JavaScript', 'React', 'Python', 'Flutter',
        'Node.js', 'AI/ML', 'Git', 'MongoDB'
    ];

    return (
        <section id="about" className="About">
            <div className="about-container">
                <div className="profile-section">
                    <div className="profile-image">
                        <div className="profile-placeholder">
                            <span>NM</span>
                        </div>
                    </div>
                </div>
                <div className="info-section">
                    <h2 className="title">About Me</h2>
                    <h3 className="subtitle">Electronics Engineering Student & Developer</h3>
                    <p className="desc">
                        I'm a passionate Computer Engineering student with a keen interest in software development,
                        problem-solving, and creating innovative solutions. I enjoy working on both frontend and backend
                        technologies, and I'm always eager to learn new skills and take on challenging projects.
                    </p>

                    <div className="highlight-stats">
                        <div className="stat-item">
                            <span className="stat-number">3.29</span>
                            <span className="stat-label">GPA</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>

                    <div className="skills-preview">
                        <h3>Core Technologies</h3>
                        <div className="skills-tags">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About