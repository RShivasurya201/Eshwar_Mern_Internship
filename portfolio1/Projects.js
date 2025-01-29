import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-items">
        <div className="project-item">
          <p><b>Disaster Information Aggregation System (Electra, Web Scraping) </b>: A real time disaster information aggregation system that would help response officials with latest data from news sites, social media etc. </p>
          <img src="https://cdn-icons-png.flaticon.com/512/4387/4387430.png" alt="ML Project Icon" />
        </div>
        <div className="project-item">
          <p><b>Heart Disease Predictor (Logistic Regression)</b>: A python project that utilizes machine learning technologies liek logistic regression to predict the presence of heart disease based on medical symptoms and various health parameters </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcH6mPPldIxPTYzb_Tiy73OorAYNbSklc8w&s" alt="Web Dev Project Icon" />
        </div>  
        <div className="project-item">
          <p><b>Codeverse (HTML, CSS, JS)</b>: A game based educational website that involves interactive and fun quizzes as a form of learning various programming concepts </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIryA3-2yGz9Vn8ozE2nm_Qe8hN7XdZqt7A&s" alt="AI Project Icon" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
