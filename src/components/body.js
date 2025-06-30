import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Body() {
    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, mobile-first design, and clean UI/UX principles.",
            image: require('../assets/bg.jpg'),
            githubUrl: "https://github.com/Noppanut01",
            liveUrl: "#",
            technologies: ["React", "CSS3", "Framer Motion"]
        },
        {
            id: 2,
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern web technologies and best practices.",
            image: require('../assets/bg.jpg'),
            githubUrl: "https://github.com/Noppanut01",
            liveUrl: "#",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 3,
            name: "Task Management App",
            description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: require('../assets/bg.jpg'),
            githubUrl: "https://github.com/Noppanut01",
            liveUrl: "#",
            technologies: ["React", "Firebase", "Material-UI"]
        },
        {
            id: 4,
            name: "Weather Dashboard",
            description: "Interactive weather dashboard with location-based forecasts, charts, and historical data visualization using modern APIs and responsive design.",
            image: require('../assets/bg.jpg'),
            githubUrl: "https://github.com/Noppanut01",
            liveUrl: "#",
            technologies: ["JavaScript", "Chart.js", "Weather API"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className="projects-section"
            id="projects"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="section-heading">Projects</h2>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        className="project-card"
                        variants={cardVariants}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                {project.liveUrl !== "#" && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link project-link-secondary"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default Body;
