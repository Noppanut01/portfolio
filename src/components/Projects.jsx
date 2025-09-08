function Projects() {
    const projects = [
        {
            title: "E-commerce Website",
            description: "A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://via.placeholder.com/400x250",
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "Material-UI"],
            image: "https://via.placeholder.com/400x250",
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather application that provides current weather information and forecasts using third-party APIs.",
            technologies: ["JavaScript", "CSS", "OpenWeather API"],
            image: "https://via.placeholder.com/400x250",
            liveLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <section id="projects" className="Projects">
            <div className="projects-container">
                <div className="title">My Projects</div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
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
                                    <a href={project.liveLink} className="project-link">Live Demo</a>
                                    <a href={project.githubLink} className="project-link">GitHub</a>
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