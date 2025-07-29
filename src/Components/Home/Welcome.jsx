import AboutContactSection from "./AboutContactSection";
import CoursesSection from "./Courses";
import VideoGallery from "./VideoGallery";
import "./Welcome.css";

function WelcomeSection() {
  return (
    <>
          <div className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome to Our eLearning Platform</h1>
        <p>
          Unlock your potential with expert-led courses, interactive lessons, and flexible learning. Whether you're a student, professional, or lifelong learner — we’ve got something for you!
        </p>
        <button className="start-button">Get Started</button>
      </div>
      <div className="welcome-image">
        <img src="https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61a52bde0488622b41d5d02d_zOjOLQY5QTLmnCOF1syHEH6ypxxnYHiA1632836325.jpg" alt="Welcome" />
      </div>
    </div>
    <CoursesSection/>
    <VideoGallery/>
    <AboutContactSection/>
    </>
    
  );
}

export default WelcomeSection;
