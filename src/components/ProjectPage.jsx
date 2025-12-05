import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id, 10);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="flex-1 py-20 px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl font-black mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 py-10">
      <div className="flex flex-wrap gap-2 p-4 mb-4">
        <button
          onClick={() => navigate('/')}
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Projects
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-white font-medium">{project.title}</span>
      </div>

      <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{project.title}</h1>
      </div>

      <div className="@container px-4 py-3 mb-8">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-[#111722] rounded-lg min-h-80"
          style={{ backgroundImage: `url("${project.image}")` }}
        ></div>
      </div>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-white text-lg font-bold leading-tight pb-2">Project Overview</h3>
            <p className="text-gray-300">{project.overview || project.description}</p>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold leading-tight pb-2">Challenges & Solutions</h3>
            <p className="text-gray-300">{project.challenges || 'Key technical challenges and their solutions.'}</p>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold leading-tight pb-2">Future Improvements</h3>
            <p className="text-gray-300">{project.future || 'Planned improvements and roadmap.'}</p>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-105"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                <span className="truncate">View Live Project</span>
              </a>
            ) : (
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary/40 text-white text-base font-bold opacity-50 cursor-not-allowed"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                <span className="truncate">View Live Project</span>
              </button>
            )}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-105"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7.0375 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.875 15.8875 6.45 16.625 6.65 16.925C7.5 18.3375 8.95 17.9 9.5625 17.625C9.65 17.0125 9.8875 16.5875 10.1625 16.3625C7.9625 16.1125 5.65 15.275 5.65 11.5625C5.65 10.5375 6.0125 9.6875 6.625 9.025C6.525 8.775 6.225 7.95 6.725 6.6625C6.725 6.6625 7.55 6.4 9.525 7.6875C10.325 7.475 11.1625 7.375 12 7.375C12.8375 7.375 13.675 7.475 14.475 7.6875C16.45 6.4 17.275 6.6625 17.275 6.6625C17.775 7.95 17.475 8.775 17.375 9.025C17.9875 9.6875 18.35 10.5375 18.35 11.5625C18.35 15.2875 16.0375 16.1125 13.8375 16.3625C14.175 16.65 14.475 17.2125 14.475 18.0625C14.475 19.275 14.4625 20.25 14.4625 20.575C14.4625 20.8375 14.65 21.1375 15.1625 21.0375C19.1375 19.75 22 16.425 22 12C22 6.475 17.525 2 12 2Z" />
                </svg>
                <span className="truncate">View on GitHub</span>
              </a>
            ) : (
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-gray-600 text-white text-base font-bold opacity-50 cursor-not-allowed"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7.0375 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.875 15.8875 6.45 16.625 6.65 16.925C7.5 18.3375 8.95 17.9 9.5625 17.625C9.65 17.0125 9.8875 16.5875 10.1625 16.3625C7.9625 16.1125 5.65 15.275 5.65 11.5625C5.65 10.5375 6.0125 9.6875 6.625 9.025C6.525 8.775 6.225 7.95 6.725 6.6625C6.725 6.6625 7.55 6.4 9.525 7.6875C10.325 7.475 11.1625 7.375 12 7.375C12.8375 7.375 13.675 7.475 14.475 7.6875C16.45 6.4 17.275 6.6625 17.275 6.6625C17.775 7.95 17.475 8.775 17.375 9.025C17.9875 9.6875 18.35 10.5375 18.35 11.5625C18.35 15.2875 16.0375 16.1125 13.8375 16.3625C14.175 16.65 14.475 17.2125 14.475 18.0625C14.475 19.275 14.4625 20.25 14.4625 20.575C14.4625 20.8375 14.65 21.1375 15.1625 21.0375C19.1375 19.75 22 16.425 22 12C22 6.475 17.525 2 12 2Z" />
                </svg>
                <span className="truncate">View on GitHub</span>
              </button>
            )}
          </div>

          <section>
            <h3 className="text-white text-lg font-bold leading-tight pb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-gray-700 text-white text-sm font-bold hover:bg-gray-600 transition-colors"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
