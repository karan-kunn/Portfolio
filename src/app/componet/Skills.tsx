
import React from 'react';

const Skills = () => {
  const skills = [

    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', title: 'C#' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', title: 'Unity' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', title: 'Blender (Basic)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png', title: 'Canva' },
    { img: 'https://avatars.githubusercontent.com/u/95789578?s=200&v=4', title: 'AI Tools (ChatGPT, Midjourney)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/4088/4088943.png', title: 'Game Design & Level Design' },
    { img: 'https://cdn-icons-png.flaticon.com/512/3208/3208710.png', title: 'Playtesting & Iteration' },
    { img: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png', title: 'GitHub' },
    { img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', title: 'Git' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', title: 'C++' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: 'CSS' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', title: 'Next.js' },
    { img: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png', title: 'Tailwind CSS' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'MySQL' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python' },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <p className="description">These are <span>the technologies and tools I’ve worked with</span></p>
      <div className="skill-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-box flex flex-col items-center shadow-md p-4 rounded-lg bg-white hover:scale-105 transition-transform">
            <img src={skill.img} alt={skill.title} className="w-16 h-16 object-contain mb-2" />
            <h2 className="text-center text-sm font-medium">{skill.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
