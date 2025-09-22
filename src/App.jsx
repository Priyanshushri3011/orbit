
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import WelcomeSection from './Components/Home/Welcome'
// import Footer from './Components/Home/Footer'
// import EventSection from './Components/Events/Event'



// function App() {

//   return (
//     <>
//     <Navbar/>
//     <WelcomeSection/>
//     <EventSection/>
//     <Footer/>
//     </>
//   )
// }

// export default App


import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import WelcomeSection from './Components/Home/Welcome'
import Footer from './Components/Home/Footer'
import EventSection from './Components/Events/Event'
import CoursesSection from './Components/Courses/CoursesSection'
import CourseDetail from './Components/Courses/CourseDetail' // ye aap create karoge

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <WelcomeSection />
              <EventSection />
              <Footer />
            </>
          }
        />

        {/* Courses Page */}
        <Route path="/courses" element={<CoursesSection />} />

        {/* Course Detail Page */}
        <Route path="/course/:courseName" element={<CourseDetail />} />
      </Routes>
    </>
  )
}

export default App
