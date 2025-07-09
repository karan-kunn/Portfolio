import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rocket Launch',
      description: 'Designed and developed a 2.5D rocket-launch game featuring horizontal navigation through obstacle-filled levels in a fully 3D environment.',
      techStack: ['Unity (C#)', 'Blender', 'Freesound.org', 'Audacity', 'VFX', 'Meshy'],
      image: '/project1.png',
      codeLink: 'https://github.com/karan-kunn/Rocket-Game',
      liveLink: 'https://github.com/karan-kunn/Rocket-game-application',
      category: '2.5D Game'
    },
    {
      id: 2,
      title: '3D Game Prototype',
      description: 'A fully functional 3D game demo built in Unity showcasing core gameplay mechanics. Features include: Player movement: Walking, sprinting UI/UX systems: Health bars, interaction prompts Interactive elements: Doors (standard & password-locked), torches, and collectible items Combat system: Gun mechanics with shooting functionality  Inventory system: Item collection, storage, and usage',
      techStack: ['Unity (C#)', 'Blender', 'Audacity', 'VFX','UI/UX', 'AI tools'],
      image: '/project2.png',
      codeLink: 'https://drive.google.com/file/d/17JNMvqHrlo6Tk77Mun9seEn_50gEZ4kX/view?usp=drive_link',
      liveLink: 'https://drive.google.com/file/d/17JNMvqHrlo6Tk77Mun9seEn_50gEZ4kX/view?usp=drive_link',
      category: '3D Game'
    },
    {
      id: 3,
      title: 'Desert Way',
      description: 'Developed a 3D first-person horror game set in an abandoned desert village where players must collect fuel cans from a building to escape while evading a hostile AI-controlled creature..',
      techStack: ['NavMesh', 'Unity', 'C#', 'Blender', 'Maximo', 'Unity Animator','audacity', 'freesoind.org'],
      image: '/project3.png',
      codeLink: 'https://drive.google.com/file/d/1vo7P4_IBXgvq81uyUVvx4ex9l77l3kPW/view?usp=drive_link' ,
      liveLink: 'https://drive.google.com/file/d/1vo7P4_IBXgvq81uyUVvx4ex9l77l3kPW/view?usp=drive_link',
      category: '3D horror Game'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="heading animate-fade-in">
          Latest<span>Projects</span>
        </h2>
        <p className="projects-subtitle">Explore my recent work as an Indie Game Creator (Solo)</p>
      </div>
      
      <div className="project-container">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-box animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay"></div>
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              
              <div className="tech-stack-container">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className='bx bx-code'></i> Unity Dev
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className='bx bx-link-external'></i> Game
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
