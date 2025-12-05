import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Projects() {
  // projects data now imported from src/data/projects.js

  const ProjectCard = ({ id, title, description, image, technologies, repoUrl, liveUrl }) => (
    <div className="stagger-item flex flex-col gap-4 p-5 rounded-xl bg-white dark:bg-[#182132] border border-gray-200 dark:border-[#232f48] transition-shadow hover:shadow-2xl hover:shadow-primary/20">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="flex flex-col gap-3">
        <h3 className="text-black dark:text-white text-lg font-bold leading-normal">{title}</h3>
        <p className="text-gray-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">{description}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((tech, index) => (
          <div key={index} className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
            <p className="text-primary text-xs font-medium leading-normal">{tech}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 pt-2">
        <Link to={`/projects/${id}`} className="flex flex-1 min-w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors text-center">
          <span className="truncate">View Project</span>
        </Link>
        
      </div>
    </div>
  );

  const headingRef = useScrollAnimation({ once: true });
  const projectsRef = useScrollAnimation({ once: true });

  return (
    <section id="projects" className="flex-1 py-10 px-4 sm:px-6 lg:px-10">
      <div ref={headingRef} className="fade-up flex flex-wrap justify-between gap-3 p-4 mb-8">
        <div className="flex min-w-full flex-col gap-3">
          <p className="text-white text-center text-4xl font-black leading-tight tracking-[-0.033em]">My Work</p>
          <p className="text-gray-200 text-center font-normal leading-normal">A selection of my best work in web development and design.</p>
        </div>
      </div>
      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
