function Experience() {
    const experiences = [
        {
            title: "Software Development Intern",
            company: "Tech Company Name",
            period: "Jun 2024 - Aug 2024",
            type: "Internship",
            location: "Bangkok, Thailand",
            description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
            achievements: [
                "Improved application performance by 25%",
                "Implemented 5+ new features for user dashboard",
                "Collaborated with team of 8 developers",
                "Participated in code reviews and agile ceremonies"
            ],
            technologies: ["React", "Node.js", "JavaScript", "Git", "MongoDB"]
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            period: "Jan 2023 - Present",
            type: "Freelance",
            location: "Remote",
            description: "Created custom websites and web applications for small businesses and startups. Managed projects from conception to deployment.",
            achievements: [
                "Delivered 10+ successful projects",
                "Maintained 98% client satisfaction rate",
                "Generated $5K+ in revenue",
                "Built responsive designs for various industries"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "PHP"]
        },
        {
            title: "Teaching Assistant",
            company: "Your University",
            period: "Aug 2023 - Dec 2023",
            type: "Part-time",
            location: "University Campus",
            description: "Assisted professor in teaching Computer Programming course. Helped students with coding assignments and debugging.",
            achievements: [
                "Tutored 50+ students in programming concepts",
                "Graded assignments and provided feedback",
                "Conducted lab sessions and office hours",
                "Improved student pass rate by 15%"
            ],
            technologies: ["Python", "Java", "C++", "Teaching", "Mentoring"]
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