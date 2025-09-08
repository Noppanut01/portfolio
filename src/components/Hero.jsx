import "../styles/Hero.css"
function Hero() {
    return (
        <section id="home" className="Hero">
            <div className="info-section">
                <div className="title">Hello, I'm Noppanut.</div>
                <div className="subtitle">I'm computer engineer student.</div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, voluptates!</div>
            </div>
            <div className="btn-section">
                <button className="proj-btn" type="button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View My Projects</button>
                <button className="get-btn" type="button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
            </div>
        </section>
    )
}


export default Hero
