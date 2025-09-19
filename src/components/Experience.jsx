function Experience() {
    const experiences = [
        {
            title: "Software Development Internship",
            company: "University of Burgundy, Polytech Dijon",
            period: "Apr 2025 - Jun 2025",
            type: "Internship",
            location: "France",
            description: "International internship experience developing software solutions. Gained valuable experience working in a multicultural environment and contributing to real-world projects.",
            achievements: [
                "Successfully completed international internship program",
                "Developed technical skills in professional environment",
                "Collaborated with international team members",
                "Adapted to new work culture and methodologies"
            ],
            technologies: ["Node.js", "TypeScript", "Git"]
        }
    ];

    return (
        <section id="experience" className="Experience">
            <div className="experience-container">
                <div className="title">Work Experience</div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="experience-card">
                                <div className="experience-header">
                                    <div className="job-info">
                                        <h3 className="job-title">{exp.title}</h3>
                                        <div className="company-name">{exp.company}</div>
                                        <div className="job-details">
                                            <span className="period">{exp.period}</span>
                                            <span className="location">{exp.location}</span>
                                            <span className={`job-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-description">
                                    <p>{exp.description}</p>
                                </div>

                                <div className="achievements">
                                    <h4>Key Achievements</h4>
                                    <ul>
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="experience-technologies">
                                    <h4>Technologies Used</h4>
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;