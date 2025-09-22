// 
import React from "react";
import "./Courses.css";
import Image11th from "../../assets/Image11th.png";
import { useNavigate } from "react-router-dom"; // ✅ Add this

function CoursesSection() {
  const navigate = useNavigate();

  const courses = [
    {
      name: "Class 11th",
      description: "Step Into Success – Focused Learning for Class 11th Students!",
      image: Image11th
    },
    {
      name: "Class 12th",
      description: "Ace your board exams with comprehensive video lectures & notes.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp"
    },
    {
      name: "IIT-JEE",
      description: "Prepare with top mentors for JEE Mains & Advanced.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp"
    },
    {
      name: "NEET",
      description: "Master Biology, Physics & Chemistry for NEET success.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp"
    },
  ];

  // ✅ Navigate function
  const handleExplore = (courseName) => {
    navigate(`/course/${courseName}`);
  };

  return (
    <section className="courses-section" id="courses">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.name} className="course-image" />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button
              className="enroll-button"
              onClick={() => handleExplore(course.name)} // ✅ navigate on click
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
