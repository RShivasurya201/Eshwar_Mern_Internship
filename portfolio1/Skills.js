// import React from 'react';

// const Skills = () => {
//   return <h1>My Skills</h1>;
// };

// export default Skills;
// import React from 'react';

// const Skills = () => {
//   return (
//     <div>
//       <h1>Skills</h1>
//       <p>
//         • HTML, CSS, JavaScript <br />
//         • React and Node.js <br />
//         • MongoDB and Express <br />
//         • Python, C/C++, and Machine Learning
//       </p>
//     </div>
//   );
// };

// export default Skills;
import React from 'react';

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill-items">
        <div className="row">
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wl2XZnNL5oTS_TSbsCiP_31dYtApXMMrXg&s" alt="Skill 1" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeB0Kf8bAgxekAzMETw0PwdbibAGCa2FrfDQ&s" alt="Skill 2" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s" alt="Skill 3" />
            <p>JS (React, Node/Express)</p>
          </div>
        </div>
        <div className="row">
          <div className="skill-item">
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png  " alt="Skill 4" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png" alt="Skill 5" />
            <p>C/C++</p>
          </div>
          <div className="skill-item">
            <img src="https://cdn-icons-png.flaticon.com/512/10321/10321419.png" alt="Skill 6" />
            <p>Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
