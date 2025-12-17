import React from 'react';

const Homee = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Karan Mehta</h1>

          <div className="typing-container">
            <h3 className="role">
              And I'm a{' '}
              <span className="typing-text">
                Game Designer & Gameplay Developer
              </span>
            </h3>
          </div>

          <p className="description">
            I design and build player-focused gameplay experiences — from
            <strong> core mechanics and level layouts</strong> to
            <strong> narrative context and in-engine systems</strong>.
            Using <strong>Unity and C#</strong>, I turn design ideas into
            polished, playable experiences across PC and mobile.
          </p>
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/karan-mehta-b392232a7/"
            className="social-link"
            title="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/karan-kunn"
            className="social-link"
            title="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="home-buttons">
          <a href="mailto:karanms2491@gmail.com" className="btn hire-btn">
            <span>Hire Me</span>
            <i className="bx bx-right-arrow-alt"></i>
          </a>

          <a href="/karan-mehta-resume.pdf" download className="btn download-btn">
            <span>Download CV</span>
            <i className="bx bx-download"></i>
          </a>
        </div>
      </div>

      <div className="home-img">
        <div className="img-container">
          <img
            src="/profile-pic.png"
            alt="Karan Mehta"
            className="profile-img"
          />
          <div className="img-overlay"></div>
        </div>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Homee;
