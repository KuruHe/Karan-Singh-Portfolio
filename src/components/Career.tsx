import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech. Computer Science</h4>
                <h5>KR Mangalam University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Coursework: AI, ML, Data Science, Web Dev, Cloud. Developed foundational and advanced knowledge in software engineering, algorithms, and AI/ML.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Developer</h4>
                <h5>QuizCraft AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an AI-powered assessment generator that automates MCQ creation and result delivery. Implemented role-based platform with real-time analytics for 100+ students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Developer</h4>
                <h5>EduVision</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed an intelligent learning assistant using NLP and a multi-domain recommendation engine using collaborative filtering and content-based techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
