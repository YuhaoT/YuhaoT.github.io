import React from "react";
import "./about.css";
import Me from "../../assets/me.png";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
        <h2>Yuhao He</h2>
        {/* <h5 className="text-light"> Full-stack Developer</h5> */}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificate</h5>
              <small>AWS Certified Cloud Practitioner</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>
          <p>I'm a dedicated software engineer with a strong passion for applying artificial intelligence and machine learning to solve real-world problems. With a solid background in computer science and a master's degree in Artificial Intelligence, I possess a deep understanding of the software development lifecycle. I am driven by the opportunity to leverage AI/ML technologies to create innovative solutions that address critical challenges and make a positive impact.
            <br />
            <br />
            I'm actively exploring opportunities as a skilled Software Engineer and Data Engineer, whether remote or onsite. If you're interested in my work and have a project that needs coding, please feel free to reach out to me.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
