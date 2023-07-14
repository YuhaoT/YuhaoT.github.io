import React from "react";
import "./experience.css";
import css3 from '../../assets/css3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bs from '../../assets/bootstrap.png'
import redux from '../../assets/redux.png'
import node from '../../assets/node.jpg'
import postgr from '../../assets/postgresql.png'
import python from '../../assets/python.png'
import java from '../../assets/java.png'
import angular from '../../assets/angular.png'
import rust from '../../assets/rust.png'
import mysql from '../../assets/mysql.png'
import dj from '../../assets/dj.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
      <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={python} className="experience_details-icon" alt="python"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={java} className="experience_details-icon" alt="java"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={postgr} className="experience_details-icon" alt="postgresql"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={mysql} className="experience_details-icon" alt="mysql"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={dj} className="experience_details-icon" alt="dj"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={rust} className="experience_details-icon" alt="rust"/>
              <div>
                <h4>Rust</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>

            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
          <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>REACT</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css"/>
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={angular} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>Angular</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={redux} className="experience_details-icon" alt="threejs"/>
              <div>         
                <h4>Redux</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
