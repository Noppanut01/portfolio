import { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='navbar'>
            <ul>
                <li className='logo'>Noppanut Maiprot</li>
            </ul>
            
            <ul className='nav-links'>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
            
            <div className='mobile-menu-toggle' onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;
