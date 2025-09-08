import "../styles/Header.css"


function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="Header">
            <nav className="navbar">
                <div className="nav-icon" onClick={() => scrollToSection('home')}>Noppanut</div>
                <ul className="nav-items">
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('education')}>Education</li>
                    <li onClick={() => scrollToSection('experience')}>Experience</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('achievements')}>Achievements</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header