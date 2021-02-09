import React, { Component } from 'react';
import Card from './../components/Card';
import projects from './../projects.json';
import './../assets/styles/portfolio.css';

class Portfolio extends Component {
  // This keeps track of the project data
  state = {
    projects: projects,
  }

  render() {
    // This maps through the project data and creates a card for each project
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Card 
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        tryLink={project.tryLink}
        repository={project.repository}
      />
    );

    return(
      <div>

        <div className="container mb-5">
          <h1>Portfolio</h1>
          <h3>Here are some projects I completed.</h3>
        </div>
          
        
        <div className="flex-container">
          
          {/* This renders the newProjects array, which is an array of the cards */}
          {newProjectsArr}

        </div>
      </div>
        
    );
  }
}

export default Portfolio;