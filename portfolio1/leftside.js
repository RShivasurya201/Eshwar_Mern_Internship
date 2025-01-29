import React from 'react';
import me from '../img/me.jpg'

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="lefttext">
        <h1>Shivasurya Rajakumar</h1>
      </div>
      <div className="image-container">
        <img src={me} alt="Your Icon" />
      </div>
      <div className="lefttext">
        <h1>Full Stack Web Developer</h1>
      </div>
    </div>
  );
};

export default LeftSide;
