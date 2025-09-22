import React from "react";
import { useParams } from "react-router-dom";
import Image11th from "../../assets/Image11th.png";

function CourseDetail() {
  const { courseName } = useParams(); // ✅ URL se courseName le liya

  // Yeh same data rakho jo aapne CoursesSection me rakha tha
  const courses = {
    "Class 11th": {
      title: "Class 11th",
      description:
        "Step into success with a strong foundation in Physics, Chemistry, and Mathematics/Biology. Our Class 11th program builds concepts from basics to advanced levels with expert faculty, study material, and doubt sessions.",
      image: Image11th,
    },
    "Class 12th": {
      title: "Class 12th",
      description:
        "Ace your Class 12th board exams with detailed lectures, NCERT coverage, sample papers, and exam-focused preparation strategies.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp",
    },
    "IIT-JEE": {
      title: "IIT-JEE Preparation",
      description:
        "Crack JEE Mains & Advanced with structured courses, daily practice problems, test series, and mentorship from IITians.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp",
    },
    "NEET": {
      title: "NEET Preparation",
      description:
        "Prepare for NEET with in-depth coverage of Biology, Physics & Chemistry, PYQs, mock tests, and AI-driven analysis.",
      image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/role-and-importance-of-teacher-in-students-life-jpg.webp",
    },
  };

  const course = courses[courseName];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} style={{ width: "400px" }} />
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetail;
