function Achievements() {
    const achievements = [
        {
            category: "Academic Awards",
            items: [
                {
                    title: "Dean's List",
                    description: "Achieved Dean's List recognition for 4 consecutive semesters",
                    date: "2022-2024",
                    icon: "🎓"
                },
                {
                    title: "Outstanding Student Award",
                    description: "Recognized for academic excellence in Computer Engineering",
                    date: "2023",
                    icon: "🏆"
                },
                {
                    title: "Best Final Project",
                    description: "AI-powered web application for student management",
                    date: "2024",
                    icon: "💡"
                }
            ]
        },
        {
            category: "Certifications",
            items: [
                {
                    title: "AWS Cloud Practitioner",
                    description: "Amazon Web Services Cloud Practitioner Certification",
                    date: "2024",
                    icon: "☁️",
                    credential: "Certificate ID: PLACEHOLDER123"
                },
                {
                    title: "Google Analytics Certified",
                    description: "Google Analytics Individual Qualification",
                    date: "2023",
                    icon: "📊",
                    credential: "Certificate ID: PLACEHOLDER456"
                },
                {
                    title: "React Developer Certificate",
                    description: "Meta React Developer Professional Certificate",
                    date: "2023",
                    icon: "⚛️",
                    credential: "Certificate ID: PLACEHOLDER789"
                }
            ]
        },
        {
            category: "Competitions & Hackathons",
            items: [
                {
                    title: "University Hackathon Winner",
                    description: "1st place in 48-hour coding competition with AI solution",
                    date: "2024",
                    icon: "🥇"
                },
                {
                    title: "Regional Programming Contest",
                    description: "Top 10 finish in ACM-ICPC regional programming contest",
                    date: "2023",
                    icon: "💻"
                },
                {
                    title: "Innovation Challenge Finalist",
                    description: "Finalist in national student innovation challenge",
                    date: "2023",
                    icon: "🚀"
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