function About() {
    return (
        <section id="about" className="About">
            <div className="about-container">
                <div className="profile-section">
                    <div className="profile-image">
                        <img src="https://via.placeholder.com/300x300/7d5e4f/ffffff?text=Your+Photo" alt="Noppanut Profile" />
                    </div>
                </div>
                <div className="info-section">
                    <div className="title">
                        About Me
                    </div>
                    <div className="subtitle">Computer Engineering Student</div>
                    <div className="desc">
                        I'm a passionate Computer Engineering student with a keen interest in software development, 
                        problem-solving, and creating innovative solutions. I enjoy working on both frontend and backend 
                        technologies, and I'm always eager to learn new skills and take on challenging projects.
                    </div>
                    <div className="highlight-stats">
                        <div className="stat-item">
                            <div className="stat-number">3.8+</div>
                            <div className="stat-label">GPA</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">2+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About