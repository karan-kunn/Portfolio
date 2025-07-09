import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="journey py-5 rounded">
        <h2 className="heading">
          My<span>Education</span>
        </h2>
        <div className="journey-box">
          <div className="timeline">
            <div className="text-box">
              <img src="/download (2).jpg" alt="BSc IT" />
              <h2>Bachelor of Science in Information Technology</h2>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2023-25</span>
                <br />
                <span style={{ marginLeft: '8px' }}>9.35 CGPA</span>
              </p>
              <p>
                Currently diving deep into game development and designing unique game ideas that challenge, entertain, and inspire.
              </p>
            </div>
            <div className="text-box">
              <img src="/download (2).jpg" alt="HSC" />
              <h2>Higher Secondary Certificate (HSC)</h2>
              <p>
                <span>Maharashtra Board</span>
              </p>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2021-22</span>
              </p>
              <p>Successfully completed my Higher Secondary Certificate (HSC) from the Maharashtra Board in 2022.</p>
            </div>
            <div className="text-box">
              <img src="/download (2).jpg" alt="SSC" />
              <h2>Secondary School Certificate (SSC)</h2>
              <p>
                <span>Maharashtra Board</span>
              </p>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2019-20</span>
              </p>
              <p>Successfully completed Secondary School Certificate (SSC) from the Maharashtra Board in 2020, achieving 64.60%.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">
          About<span>Me</span>
        </h2>
        <h3>Game Developer & Designer</h3>
        <p>Hello There! I am Karan Mehta From Mumbai and I design gameplay that’s intuitive,
          challenging, and fun—and I bring it to life through code. With Unity, C#,
          and a strong focus on 3D game development, I craft immersive mechanics, 
          smart systems, and levels that flow. I play games across PC, mobile, 
          and console—not just for fun, but to study what makes them great. 
          That curiosity helps me design better, think like a player, 
          and build experiences that feel just right.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
