import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Skills() {
  const headingRef = useScrollAnimation({ once: true });
  const frontendRef = useScrollAnimation({ once: true });
  const backendRef = useScrollAnimation({ once: true });
  const devopsRef = useScrollAnimation({ once: true });
  const frontendSkills = [
    { icon: 'html', name: 'HTML5', level: 'Advanced' },
    { icon: 'css', name: 'CSS3', level: 'Advanced' },
    { icon: 'javascript', name: 'JavaScript', level: 'Advanced' },
    { icon: 'tcss', name: 'Tailwind CSS', level: 'Advanced' },
    { icon: 'group', name: 'React', level: 'Advanced' },
    { icon: 'group', name: 'NextJS', level: 'Intermediate' }
  ];

  const backendSkills = [
    { icon: 'data_object', name: 'NodeJS', level: 'Advanced' },
    { icon: 'code', name: 'ExpressJS', level: 'Intermediate' },
    { icon: 'database', name: 'MongoDB', level: 'Intermediate' }
  ];

  const devopsSkills = [
    { icon: 'hub', name: 'Git', level: 'Advanced' },
    { icon: 'settings', name: 'Netlify', level: 'Advanced' },
    { icon: 'cloud', name: 'AWS', level: 'Beginner' },
    { icon: 'integration_instructions', name: 'VS Code', level: 'Advanced' }
  ];

  const SkillCard = ({ icon, name, level }) => (
    <div className="stagger-item flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] p-4 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
      <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
      <div className="flex flex-col gap-1 mt-1">
        <h2 className="text-black dark:text-white text-base font-bold leading-tight">{name}</h2>
        <p className="text-gray-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">{level}</p>
      </div>
    </div>
  );

  return (
    <section className="">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-full flex-1">
              <div className="flex-grow pt-10 pb-20">
                <div ref={headingRef} className="fade-up flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-full flex-col gap-3">
                    <p className="text-white text-center text-4xl font-black leading-tight tracking-[-0.033em]">Skills & Expertise</p>
                    <p className="text-white text-center font-normal leading-normal">A showcase of my technical capabilities and the tools I use to build modern web applications.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div ref={frontendRef} className="fade-left px-4 pb-3 pt-5">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Frontend Development</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                      {frontendSkills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div ref={backendRef} className="fade-right px-4 pb-3 pt-5">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Backend Development</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                      {backendSkills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div ref={devopsRef} className="fade-left px-4 pb-3 pt-5">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">DevOps & Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                      {devopsSkills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
