function Education() {
    const educationData = [
        {
            degree: "Bachelor of Engineering in Computer Engineering",
            school: "Your University Name",
            period: "2021 - 2025",
            gpa: "3.85/4.00",
            status: "Expected Graduation",
            courses: [
                "Data Structures & Algorithms",
                "Database Management Systems", 
                "Web Development",
                "Software Engineering",
                "Computer Networks",
                "Machine Learning"
            ]
        },
        {
            degree: "High School Diploma",
            school: "Your High School Name", 
            period: "2018 - 2021",
            gpa: "3.9/4.00",
            status: "Graduated with Honors",
            courses: [
                "Advanced Mathematics",
                "Physics",
                "Computer Science",
                "English"
            ]
        }
    ];

    return (
        <section id="education" className="Education">
            <div className="education-container">
                <div className="title">Education</div>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="education-header">
                                <div className="degree-info">
                                    <h3 className="degree-title">{edu.degree}</h3>
                                    <div className="school-name">{edu.school}</div>
                                    <div className="education-period">{edu.period}</div>
                                </div>
                                <div className="gpa-section">
                                    <div className="gpa-label">GPA</div>
                                    <div className="gpa-value">{edu.gpa}</div>
                                    <div className="status">{edu.status}</div>
                                </div>
                            </div>
                            
                            <div className="relevant-courses">
                                <h4>Relevant Coursework</h4>
                                <div className="courses-grid">
                                    {edu.courses.map((course, courseIndex) => (
                                        <span key={courseIndex} className="course-tag">{course}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="transcript-section">
                    <div className="transcript-card">
                        <h3>Academic Transcripts</h3>
                        <p>Official transcripts available upon request. Includes detailed course grades, credit hours, and academic honors.</p>
                        <button className="transcript-btn">Request Transcript</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;