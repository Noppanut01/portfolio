function Skills() {
    const skillsData = {
        "Programming Languages": [
            { name: "JavaScript", icon: "src/assets/icon/js.png", description: "Modern ES6+ & frameworks" },
            { name: "Python", icon: "src/assets/icon/python.png", description: "Data science & web development" },
            { name: "TypeScript", icon: "src/assets/icon/typescript.png", description: "Type-safe development" },
            { name: "Dart", icon: "src/assets/icon/dart.png", description: "Flutter mobile development" },
            { name: "Java", icon: "src/assets/icon/java.png", description: "Network programming" }
        ],
        "Frontend Development": [
            { name: "React", icon: "src/assets/icon/react.png", description: "Component-based UI development" },
            { name: "HTML/CSS", icon: "src/assets/icon/code.png", description: "Semantic markup & styling" },
            { name: "Flutter", icon: "src/assets/icon/flutter.png", description: "Cross-platform mobile apps" },
            { name: "Responsive Design", icon: "src/assets/icon/responsive.png", description: "Mobile-first approach" },
            { name: "Figma", icon: "src/assets/icon/figma.png", description: "Frontend design" }
        ],
        "Backend & Tools": [
            { name: "Node.js", icon: "src/assets/icon/node-js.png", description: "Server-side JavaScript" },
            { name: "ExpressJS", icon: "src/assets/icon/express.png", description: "Server-side JavaScript" },
            { name: "Git", icon: "src/assets/icon/git.png", description: "Version control & collaboration" },
            { name: "Postgresql/Mysql", icon: "src/assets/icon/postgre.png", description: "Database management" },
            { name: "REST APIs", icon: "src/assets/icon/api.png", description: "API design & integration" },
            { name: "LangChain", icon: "src/assets/icon/langchain.png", description: "RAG Pipeline" },
            { name: "FastAPI", icon: "src/assets/icon/fastapi.png", description: "Backend api" },
            { name: "Php", icon: "src/assets/icon/php.png", description: "Backend web application" }
        ],
        "AI & Machine Learning": [
            { name: "Machine Learning", icon: "src/assets/icon/ml-model.png", description: "Data analysis & modeling" },
        ]
    };

    return (
        <section id="skills" className="Skills">
            <div className="skills-container">
                <h2 className="title">Technical Skills</h2>
                <div className="skills-categories">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="skill-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <img src={skill.icon} alt="" className="skill-icon" />
                                        <h4 className="skill-name">{skill.name}</h4>
                                        <p className="skill-description">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;