import AboutContactSection from "./AboutContactSection";
import CoursesSection from "./Courses";
import VideoGallery from "./VideoGallery";
import "./Welcome.css";
import welcomeimg from "../../assets/welcomeimg.png"


function WelcomeSection() {
  return (
    <>
          <div className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome to Orbit Classes</h1>
        <p>
          Empower your future with expert guidance, focused study plans, and result-driven learning. Whether you’re preparing for Class 11th, 12th, NEET, or JEE — we’re here to help you achieve your dreams!
        </p>
        <button className="start-button">Get Started</button>
      </div>
      <div className="welcome-image">
        <img src={welcomeimg} alt="Welcome" />
      </div>
    </div>
    <CoursesSection/>
    <VideoGallery/>
    <AboutContactSection/>
    </>
    
  );
}

export default WelcomeSection;
