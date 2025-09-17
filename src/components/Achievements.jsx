function Achievements() {
    const achievements = [
        {
            category: "Competitions & Hackathons",
            items: [
                {
                    title: "Hackathon Achievement",
                    description: "Participated in hackathon competition and developed innovative solution",
                    date: "2024",
                    icon: "🏆"
                }
            ]
        },
        {
            category: "Professional Experience",
            items: [
                {
                    title: "International Internship - France",
                    description: "Successfully completed software development internship in France, gaining international work experience",
                    date: "2024",
                    icon: "🇫🇷"
                }
            ]
        }
    ];

    return (
        <section id="achievements" className="Achievements">
            <div className="achievements-container">
                <div className="title">Achievements & Certifications</div>
                <div className="achievements-grid">
                    {achievements.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="category-section">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="achievements-list">
                                {category.items.map((achievement, itemIndex) => (
                                    <div key={itemIndex} className="achievement-card">
                                        <div className="achievement-icon">{achievement.icon}</div>
                                        <div className="achievement-content">
                                            <div className="achievement-header">
                                                <h4 className="achievement-title">{achievement.title}</h4>
                                                <span className="achievement-date">{achievement.date}</span>
                                            </div>
                                            <p className="achievement-description">{achievement.description}</p>
                                            {achievement.credential && (
                                                <div className="credential-info">
                                                    <small>{achievement.credential}</small>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="credentials-note">
                    <div className="note-card">
                        <h3>Verification Available</h3>
                        <p>All certifications and achievements can be verified upon request. Digital certificates and supporting documentation are available.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;