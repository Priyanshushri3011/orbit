import React from "react";
import "./VideoGallery.css";

function VideoGallery() {
  const videos = [
    {
      title: "A special talk to class 12th Students",
      url: "https://www.youtube.com/embed/yYa_nr1nH5M",
    },
    {
      title: "Our Video Content Plan – Your Thoughts Matter!",
      url: "https://www.youtube.com/embed/QVVTBADO1pw",
    },
    {
      title: "Orbit Classes Patna : By - Adarsh Sir",
      url: "https://www.youtube.com/embed/qbc_dpmW7lk",
    },
    {
      title: "Coulomb’s Law Explained | Class 12 Physics | Adarsh Sir | ",
      url: "https://www.youtube.com/embed/MGSQaTm1-PI",
    },
    {
      title: "📚 Quantisation of Charge – Most Expected Questions with Solutions! ",
      url: "https://www.youtube.com/embed/Iri5_CnMNE4",
    },
    {
      title: "Grouping of Resistors | Series &amp; Parallel | Class 12 Physics | Adarsh Sir | ",
      url: "https://www.youtube.com/embed/qNZydvysFjk",
    },
  ];

  return (
    <section className="video-gallery">
      <h2>Explore Our Video Courses</h2>
      <div className="video-scroll-container">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.url}
              title={`video-${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoGallery;
