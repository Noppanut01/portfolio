import { motion } from 'framer-motion';
import { FaGithub, FaEye } from 'react-icons/fa';

function Banner() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.section 
            className="banner"
            id="about"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p className="role" variants={itemVariants}>
                Developer
            </motion.p>
            
            <motion.div className="name-container" variants={itemVariants}>
                <div>Hello, my name</div>
                <div>is Noppanut Maiprot</div>
            </motion.div>

            <motion.div className="description" variants={itemVariants}>
                I am an Electronic Engineering Technology (EnET-C) student from KMUTNB, passionate about creating innovative solutions through technology. I specialize in full-stack development and enjoy bringing ideas to life through code.
            </motion.div>
            
            <motion.div className='button-group' variants={itemVariants}>
                <button className="btn btn-primary" onClick={scrollToProjects}>
                    <FaEye /> View Projects
                </button>
                <a href="https://github.com/Noppanut01" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">
                        <FaGithub /> GitHub
                    </button>
                </a>
            </motion.div>
        </motion.section>
    )
}

export default Banner
