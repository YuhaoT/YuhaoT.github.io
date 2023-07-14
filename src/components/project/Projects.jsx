import React from "react";
import "./project.css";
import IMG1 from "../../assets/stockDashboard.png";
import IMG2 from "../../assets/todolist.png";
import IMG3 from "../../assets/lorelad.png";


const projects = [
  {
    id: 1,
    image: IMG1,
    title: "StockDashboard - Angular, Bootstrap & Node.js",
    github: "https://github.com/YuhaoT/AngularChart",
    demo: "https://stock-dashboard1-923814f52397.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "TodoList - React & Redux",
    github: "https://github.com/YuhaoT/Redux-TodoApp",
    demo: "https://todolist-redux-a6a5c1da38e7.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "LORELAD - Platform to help spread the stories and culture of unrepresented languages. - BU Spark! Group project",
    github: "https://github.com/YuhaoT/LORELAD",

  },
];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
