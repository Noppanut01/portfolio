import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const socialLinks = [
        {
            icon: <FaInstagram />,
            url: "https://instagram.com/noppanut01",
            label: "Instagram"
        },
        {
            icon: <FaLinkedin />,
            url: "https://linkedin.com/in/noppanut",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/Noppanut01",
            label: "GitHub"
        },
        {
            icon: <FaEnvelope />,
            url: "mailto:noppanut@example.com",
            label: "Email"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer 
            className="footer"
            id="contact"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="social-icons">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        variants={iconVariants}
                        whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.label}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            
            <motion.div 
                className="copyright"
                variants={iconVariants}
            >
                © 2025 Noppanut Maiprot. All rights reserved.
            </motion.div>
        </motion.footer>
    )
}

export default Footer;
