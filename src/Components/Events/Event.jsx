import React from 'react';
import './Event.css';
import event1 from "./Image/event1.jpeg"
import event2 from "./Image/event2.jpeg"
import event3 from "./Image/event3.jpeg"
import event4 from "./Image/event4.jpeg"
const events = [
  {
    title: 'Tech Conference 2025',
    date: 'August 15, 2025',
    location: 'Delhi, India',
    description: 'A conference on emerging tech trends including AI, ML, and Web3.',
    image: event1,
  },
  {
    title: 'Startup Meetup',
    date: 'September 10, 2025',
    location: 'Bangalore, India',
    description: 'Networking event for budding entrepreneurs and investors.',
    image: event2,
  },
  {
    title: 'Developer Bootcamp',
    date: 'October 5, 2025',
    location: 'Hyderabad, India',
    description: 'A full-day hands-on coding bootcamp focused on MERN stack.',
    image: event3,
  },
    {
    title: 'Developer Bootcamp',
    date: 'October 5, 2025',
    location: 'Hyderabad, India',
    description: 'A full-day hands-on coding bootcamp focused on MERN stack.',
    image: event4,
  },
];

function EventSection() {
  return (
    <div className="event-section" id='event'>
      <h2>Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-img" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSection;
