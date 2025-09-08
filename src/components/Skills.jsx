function Skills() {
    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Git", level: 85 }
    ];

    return (
        <section id="skills" className="Skills">
            <div className="skills-container">
                <div className="title">My Skills</div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <div className="skill-percentage">{skill.level}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;