import "../styles/Hero.css"
import { useEffect, useState } from 'react';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const fullText = '> whoami';
    
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 120);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="Hero">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <span className="control red"></span>
                        <span className="control yellow"></span>
                        <span className="control green"></span>
                    </div>
                    <div className="terminal-title">noppanut@portfolio:~</div>
                </div>
                <div className="terminal-content">
                    <div className="terminal-line">
                        <span className="prompt">user@localhost:~$ </span>
                        <span className="command">{displayText}</span>
                        <span className="terminal-cursor"></span>
                    </div>
                    <div className="output-section">
                        <div className="user-info">
                            <div className="info-lines">
                                <div className="info-line">
                                    <span className="field">Name:</span>
                                    <span className="value">Noppanut Maiparot</span>
                                </div>
                                <div className="info-line">
                                    <span className="field">Role:</span>
                                    <span className="value">Electronics Engineering Student & Developer</span>
                                </div>
                                <div className="info-line">
                                    <span className="field">University:</span>
                                    <span className="value">KMUTNB</span>
                                </div>
                                <div className="info-line">
                                    <span className="field">Skills:</span>
                                    <span className="value">Python | JavaScript | React | Flutter | AI/ML</span>
                                </div>
                                <div className="info-line">
                                    <span className="field">Status:</span>
                                    <span className="value status-online">● Available for internships</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="terminal-commands">
                        <div className="terminal-line">
                            <span className="prompt">user@localhost:~$ </span>
                            <button className="terminal-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                ls -la projects/
                            </button>
                        </div>
                        <div className="terminal-line">
                            <span className="prompt">user@localhost:~$ </span>
                            <button className="terminal-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                cat contact.txt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero
