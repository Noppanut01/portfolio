function Education() {
    const educationData = [
        {
            degree: "Bachelor of Engineering in Electronics Technology Engineering",
            school: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
            period: "2022 - 2026",
            gpa: "3.29/4.00",
            status: "Currently Studying",
            courses: [
                "Computer Programming",
                "Object-Oriented Programming", 
                "Data Structures & Algorithm Analysis",
                "Database & Data Technology",
                "Web Application Development",
                "Software Engineering",
                "Mobile Application Development",
                "Machine Learning & Deep Learning",
                "Artificial Intelligence",
                "Computer Networks & Data Communication",
                "Cybersecurity",
                "Digital Image Processing",
                "Operating Systems",
                "Computer Architecture",
                "Microcontroller Systems",
                "Cloud Computing",
                "Network Programming"
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