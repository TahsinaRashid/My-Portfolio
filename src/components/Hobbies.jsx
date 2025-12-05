import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Hobbies() {
  const headingRef = useScrollAnimation({ once: true });
  const contentRef = useScrollAnimation({ once: true });
  const hobbiesRef = useScrollAnimation({ once: true });

  const hobbies = [
    {
      icon: 'travel',
      title: 'Traveling',
      description: 'Exploring new places and cultures to broaden my horizons and discover new perspectives.'
    },
    {
      icon: 'photo_camera',
      title: 'Photography',
      description: 'Capturing moments and landscapes, finding unique perspectives in everyday life.'
    },
    {
      icon: 'book',
      title: 'Reading',
      description: 'Diving into books that expand my knowledge, spark creativity, and inspire new ideas.'
    },
    {
      icon: 'sports_soccer',
      title: 'Sports & Fitness',
      description: 'Staying active through sports and fitness to maintain balance and mental clarity.'
    }
  ];

  return (
    <section id="about">
      {/* Main About Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 py-16">
        <div className="max-w-full mx-auto">
          {/* Heading */}
          <h2 ref={headingRef} className="fade-up text-white text-3xl md:text-4xl font-bold leading-tight mb-8 text-center">
            About Me
          </h2>

          {/* Introduction */}
          <div ref={contentRef} className="space-y-6 mb-12 fade-up">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">Tahsina Rashid Prapti</span>, a passionate full-stack web developer with a genuine love for creating beautiful, functional, and user-centric digital experiences. I'm driven by curiosity and the constant desire to learn and grow in the ever-evolving tech landscape.
            </p>

            {/* Programming Journey */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">code</span>
                My Programming Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My coding journey started with a spark of curiosity about how websites work. I began learning web development fundamentals and quickly fell in love with turning ideas into interactive web applications. Over time, I've honed my skills in React, JavaScript, and full-stack development. Each project I build teaches me something new, and I'm committed to mastering the craft of web development. I believe in writing clean, maintainable code and staying updated with the latest industry trends and best practices.
              </p>
            </div>

            {/* Type of Work I Enjoy */}
            <div className="bg-gradient-to-r from-purple-500/10 to-primary/10 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">work</span>
                What I Love Doing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl flex-shrink-0">✦</span>
                  <div>
                    <p className="text-white font-semibold">Frontend Development</p>
                    <p className="text-gray-400 text-sm">Building responsive, interactive user interfaces with React and modern CSS.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl flex-shrink-0">✦</span>
                  <div>
                    <p className="text-white font-semibold">Problem Solving</p>
                    <p className="text-gray-400 text-sm">Breaking down complex problems and finding elegant solutions through logical thinking.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl flex-shrink-0">✦</span>
                  <div>
                    <p className="text-white font-semibold">Collaboration</p>
                    <p className="text-gray-400 text-sm">Working with teams to create meaningful products and learning from diverse perspectives.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl flex-shrink-0">✦</span>
                  <div>
                    <p className="text-white font-semibold">Continuous Learning</p>
                    <p className="text-gray-400 text-sm">Staying curious and exploring new technologies, frameworks, and development methodologies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personality & Interests */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Beyond the Code
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Outside of programming, I'm a well-rounded person with diverse interests. I love exploring new cultures through travel, capturing life's moments through photography, and staying physically active through sports. I'm an avid reader who believes that knowledge comes from both code and books. I value work-life balance and believe that hobbies and interests outside of tech make me a better developer.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm naturally curious, detail-oriented, and thrive in collaborative environments. I'm always open to feedback, enjoy mentoring others, and believe in the power of continuous improvement. When I'm not coding, you'll likely find me exploring new places, hitting the gym, or getting lost in a good book.
              </p>
            </div>
          </div>

          {/* Hobbies Grid */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-8 text-center fade-up">My Interests & Hobbies</h3>
            <div ref={hobbiesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="stagger-item flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-[#182132] dark:to-[#0f172a] rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-primary text-5xl">{hobby.icon}</span>
                  <h4 className="text-white font-bold text-center">{hobby.title}</h4>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
