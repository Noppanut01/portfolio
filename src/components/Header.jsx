import "../styles/Header.css"


function Header() {
    return (
        <div className="Header">
            <nav className="navbar">
                <div className="nav-icon">Noppanut</div>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header