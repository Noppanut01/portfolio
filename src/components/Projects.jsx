function Projects() {
    const projects = [
        {
            title: "RAG Chatbot LLM",
            description: "Advanced AI chatbot using Retrieval-Augmented Generation with Llama 3.2 model, demonstrating machine learning and natural language processing capabilities.",
            technologies: ["Python", "LLM", "RAG", "AI"],
            icon: "🤖",
            liveLink: "#",
            githubLink: "https://github.com/Noppanut01/RagChatbotLLM",
            featured: true
        },
        {
            title: "Netflix Clone",
            description: "Full-featured Netflix clone mobile application built with Flutter, featuring user authentication, video streaming interface, and responsive design.",
            technologies: ["Dart", "Flutter", "Mobile App"],
            icon: "📱",
            liveLink: "#",
            githubLink: "https://github.com/Noppanut01/Netflix_clone"
        },
        {
            title: "Vacuum Robot Simulator",
            description: "TypeScript-based simulation of a vacuum robot navigating through rooms, featuring pathfinding algorithms and real-time visualization.",
            technologies: ["TypeScript", "JavaScript", "Simulation"],
            icon: "🤖",
            liveLink: "#",
            githubLink: "https://github.com/Noppanut01/vacuum-robot-simulator"
        },
        {
            title: "Software Engineering Mobile App",
            description: "Comprehensive mobile application project developed as part of software engineering coursework, showcasing full development lifecycle.",
            technologies: ["Python", "Mobile Development", "SE Practices"],
            icon: "⚙️",
            liveLink: "#",
            githubLink: "https://github.com/Noppanut01/se-project"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects, skills, and experience with modern web technologies and responsive design.",
            technologies: ["CSS", "HTML", "JavaScript", "React"],
            icon: "💼",
            liveLink: "#",
            githubLink: "https://github.com/Noppanut01/portfolio"
        }
    ];

    return (
        <section id="projects" className="Projects">
            <div className="projects-container">
                <h2 className="title">Featured Projects</h2>
                <p className="subtitle">
                    A collection of projects that showcase my skills in web development,
                    mobile apps, AI/ML, and software engineering.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image">
                                <div className="project-icon">
                                    {project.icon}
                                </div>
                                <div className="project-category">
                                    {project.technologies[0]}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.liveLink}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;