"use client";
import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rocket Launch',
      description: 'Designed and developed a 2.5D rocket-launch game featuring horizontal navigation through obstacle-filled levels in a fully 3D environment.',
      techStack: ['Unity (C#)', 'Blender', 'Freesound.org', 'Audacity', 'VFX', 'Meshy'],
      video: '/project1-demo.mp4', // Add your video file in public folder
      image: '/project1.png',
      codeLink: 'https://github.com/karan-kunn/Rocket-Game',
      liveLink: 'https://github.com/karan-kunn/Rocket-game-application',
      category: '2.5D Game'
    },
    {
      id: 2,
      title: '3D Game Prototype',
      description: 'A fully functional 3D game demo built in Unity showcasing core gameplay mechanics. Features include: Player movement: Walking, sprinting; UI/UX systems: Health bars, interaction prompts; Interactive elements: Doors (standard & password-locked), torches, and collectible items; Combat system: Gun mechanics with shooting functionality; Inventory system: Item collection, storage, and usage',
      techStack: ['Unity (C#)', 'Blender', 'Audacity', 'VFX','UI/UX', 'AI tools'],
      image: '/project2.png',
      codeLink: 'https://drive.google.com/file/d/17JNMvqHrlo6Tk77Mun9seEn_50gEZ4kX/view?usp=drive_link',
      liveLink: 'https://drive.google.com/file/d/17JNMvqHrlo6Tk77Mun9seEn_50gEZ4kX/view?usp=drive_link',
      category: '3D Game'
    },
    {
      id: 3,
      title: 'Desert Way',
      description: 'Developed a 3D first-person horror game set in an abandoned desert village where players must collect fuel cans from a building to escape while evading a hostile AI-controlled creature.',
      techStack: ['NavMesh', 'Unity', 'C#', 'Blender', 'Maximo', 'Unity Animator','Audacity', 'Freesound.org'],
      video: '/project3-demo.mp4',
      image: '/project3.png',
      codeLink: 'https://drive.google.com/file/d/1vo7P4_IBXgvq81uyUVvx4ex9l77l3kPW/view?usp=drive_link',
      liveLink: 'https://drive.google.com/file/d/1vo7P4_IBXgvq81uyUVvx4ex9l77l3kPW/view?usp=drive_link',
      category: '3D Horror Game'
    },
    {
      id: 4,
      title: 'Jungle Adventure 2D',
      description: 'Player Mechanics: Smooth movement, jumping, falling, and damage system using Rigidbody2D and a state-driven animation setup (Idle, Run, Jump, Fall, Hurt). Enemy Interaction: Enemy patrols (Frog, Opossum, Bear); player can take damage or stomp to destroy them. Collision & Collectibles: Cherries collectible system; player respawns on death or falling. UI System: Real-time health and score display with dynamic updates. Audio Feedback: Background music, hurt SFX, and restart SFX with contextual playback control. Game Flow: Auto level restart on death using SceneManager; animation transitions managed via Animator + custom logic.',
      techStack: ['Unity', 'C#', 'Blender', 'Unity Animator','Audacity', 'Freesound.org','Unity Asset'],
      video: '/project4-demo.mp4',
      image: '/project4.png',
      codeLink: 'https://github.com/karan-kunn/2D-Jungle-Adventure-DEMO-DEV',
      liveLink: 'https://github.com/karan-kunn/Jungle_game_LV1',
      category: '2D Adventure Game'
    },
    {
      id: 5,
      title: 'Horro design Room Layout',
      description: 'Just shared a look at one of my horror game level layouts — a space designed to create tension 😱 , mystery 🧐 , and environmental storytelling 😎. Every room in this map plays a role in building atmosphere, pacing, and player curiosity. 😃  This project helped me explore how layout, lighting, and narrative hints can work together to shape the player’s experience. Excited to keep improving and sharing more of my design work! ☺️ For more images click on Unity Dev .',
      techStack: ['Figma', 'AI'],
      image: '/Level-layout1.png',
      category: 'Level layout',
      codeLink: 'https://www.linkedin.com/posts/karan-mehta-b392232a7_gamedesigner-gameart-map-activity-7405110557630078976-YMfq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEnkxJ0BEriaxBPClujVSYI2sYqioS10akU',
      liveLink: 'https://www.linkedin.com/in/karan-mehta-b392232a7/',
    },

    {
      id: 6,
      title: 'UI Design',
      description: 'Unveiling some UI concepts from Project: Chimera — a dark, science-horror world built around abandoned labs, failed experiments, and atmospheric tension. designed these screens to feel cold, isolated, and unsettling, using minimal text and strong visual cues to enhance immersion. These were created earlier, but revisiting them now reminds me how much fun it is to shape mood and storytelling through UI alone. For more images click on Unity Dev .',
      techStack: ['Figma', 'AI'],
      image: '/Chimera.png',
      category: 'UI',
      codeLink: 'https://www.linkedin.com/posts/karan-mehta-b392232a7_gamedesign-leveldesign-horrorgame-activity-7404751591582642176-r7iA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEnkxJ0BEriaxBPClujVSYI2sYqioS10akU',
      liveLink: 'https://www.linkedin.com/in/karan-mehta-b392232a7/',
    },
    {
      id: 7,
      title: 'Level Design',
      description: 'Exploring the spooky side of level design! 🕯️💀 These are a few haphazard horror map concepts I created, experimenting with tension, atmosphere, and environment-based storytelling. These horror map ideas were created a while ago — finally sharing them now!. For more images click on Unity Dev .',
      techStack: ['Figma', 'AI'],
      image: '/Level-Layout2.png',
      category: 'Level layout',
      codeLink: 'https://www.linkedin.com/posts/karan-mehta-b392232a7_gamedesign-leveldesign-horrorgame-activity-7391812574436163586-GD-o?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEnkxJ0BEriaxBPClujVSYI2sYqioS10akU',
      liveLink: 'https://www.linkedin.com/in/karan-mehta-b392232a7/',
    },
    {
      id: 8,
      title: 'UI Design',
      description: 'Introducing my Nextbot Chase 2 design concept! 🧠🎶 a theme centered on tension, uncertainty, and the excitement of being pursued - and I’ve got to say, it’s been incredibly fun to design!. For more images click on Unity Dev .',
      techStack: ['Figma', 'AI'],
      image: '/UI2.png',
      category: 'UI',
      codeLink: 'https://www.linkedin.com/posts/karan-mehta-b392232a7_gamedesign-leveldesign-horrorgame-activity-7391806347010260992--wmF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEnkxJ0BEriaxBPClujVSYI2sYqioS10akU',
      liveLink: 'https://www.linkedin.com/in/karan-mehta-b392232a7/',
    },

    
  ];

    const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

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
              {project.video ? (
                <video
                  ref={(el) => { if(el) videoRefs.current[index] = el; }}
                  className="project-video"
                  muted
                  loop
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
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