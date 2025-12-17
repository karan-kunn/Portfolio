import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      {/* EDUCATION */}
      <div className="journey py-5 rounded">
        <h2 className="heading">
          My<span>Education</span>
        </h2>
        <div className="journey-box">
          <div className="timeline">

            {/* BSc IT */}
            <div className="text-box">
              <img src="/download (2).jpg" alt="BSc IT" />
              <h2>Bachelor of Science in Information Technology</h2>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2023-25</span><br />
                <span style={{ marginLeft: '8px' }}>9.35 CGPA</span>
              </p>
              <p>
                Completed Bachelor in 2025 , which helped me develop
                strong analytical thinking, Coding, logical problem-solving, and a
                structured approach to understanding systems — skills that
                directly support my work in game design and gameplay development..
              </p>
            </div>

            {/* HSC */}
            <div className="text-box">
              <img src="/download (2).jpg" alt="HSC" />
              <h2>Higher Secondary Certificate (HSC)</h2>
              <p><span>Maharashtra Board</span></p>
              <p>Year: <span style={{ marginLeft: '8px' }}>2021-22</span></p>
              <p>
                Completed Higher Secondary education in 2022 with a
                <strong> science background</strong>. and got 60.50%. Built my first interest in computers,
                creativity, and how games actually work behind the scenes.
              </p>
            </div>

            {/* SSC */}
            <div className="text-box">
              <img src="/download (2).jpg" alt="SSC" />
              <h2>Secondary School Certificate (SSC)</h2>
              <p><span>Maharashtra Board</span></p>
              <p>Year: <span style={{ marginLeft: '8px' }}>2019-20</span></p>
              <p>
                Completed SSC in 2020 with 64.60%. 
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="about-content">
        <h2 className="heading">
          About<span>Me</span>
        </h2>

        <h3>Game Designer & Gameplay Developer</h3>

        <p>
          I'm Karan Mehta, a Mumbai-based 
          <strong>Game Designer and Gameplay Developer</strong> that specializes in developing captivating player experiences via robust mechanics, 
          well-considered level design, and flawless execution. 
          My main tools for converting design concepts into playable systems are <strong> Unity and C#</strong>. 
        </p>

        <p>
          My design approach starts with the player: how they move, what they feel,
          and why a moment is engaging. I actively analyze games across PC, mobile,
          and console to understand <strong>pacing, feedback, difficulty curves,
          and narrative flow</strong>, then apply those insights to my own projects.
        </p>

        <p>
          I approach game design with clarity and structure — starting with a
          <strong> clear Game Design Document (GDD)</strong>, rapid iteration using
          <strong> Figma for UI and flow</strong>, and early
          <strong> top-down level layouts</strong> to test pacing, player routes,
          and moment-to-moment gameplay before full implementation.
        </p>

        <p>
          From prototyping gameplay loops and designing levels, to shaping narrative
          context and implementing systems in-engine, I enjoy working across both
          <strong>design and development</strong>. My goal is always the same:
          build experiences that feel intuitive, immersive, and satisfying to play.
        </p>

        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
