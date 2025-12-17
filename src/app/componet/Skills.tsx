
import React from 'react';

const Skills = () => {
  const skills = [

  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
    title: 'Unity Engine',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    title: 'C# (Gameplay Programming)',
  },
  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', title: 'C++' },

  // GAME DESIGN & LEVEL DESIGN (SYMBOLIC ICONS – SAME STYLE)
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1261/1261163.png',
    title: 'Game & Systems Design',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/747/747086.png',
    title: 'Level Design',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',
    title: 'Gameplay Prototyping & Iteration',
  },

  // DESIGN & CONTENT CREATION
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
    title: 'Blender (Basic 3D Assets)',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'Figma (UI & UX Flow)',
  },

  // PIPELINE & COLLABORATION
  {
    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    title: 'Git (Version Control)',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    title: 'GitHub (Collaboration)',
  },

  // SUPPORTING TOOLS
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    title: 'Python (Scripting Basics)',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
    title: 'AI Tools (Design & Prototyping)',
  },
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
