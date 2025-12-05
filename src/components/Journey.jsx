import React from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

function Journey() {
  const headingRef = useScrollAnimation({ once: true });
  const itemsRef = useScrollAnimation({ once: true });

  const timelineEvents = [
    {
      icon: "school",
      title: "Started University",
      date: "November 2022 - Present",
      description:
        "Began my Computer Science journey with curiosity, dedication & a passion to build impactful technology.",
    },
    {
      icon: "workspace_premium",
      title: "Web Application Development Workshop",
      date: "18 May 2024",
      description:
        "Explored myself as a passionate web developer through an wonderful workshop.",
    },
    {
      icon: "domain",
      title: "Complete Web Development Course With Programming Hero",
      date: "July 2025 - Present",
      description:
        "Best decision ever! Joined Programming Hero to enhance my web development skills and build real-world projects.",
    },
  ];

  return (
    <section id="journey" className="w-full px-4 sm:px-6 lg:px-10 py-16">
      {/* Heading */}
      <div ref={headingRef} className="fade-up mb-12">
        <h2 className="text-white text-4xl font-black text-center mb-3">My Journey</h2>
        <p className="text-gray-300 text-center text-base">The milestones in my web development career</p>
      </div>

      {/* Timeline */}
      <div ref={itemsRef} className="relative border-l border-white/20 pl-6 space-y-10 max-w-2xl mx-auto">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="stagger-item relative pl-4"
          >
            {/* Dot Icon */}
            <span className="absolute left-[-14px] top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-[18px]">
                {event.icon}
              </span>
            </span>

            {/* Content Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:scale-[1.02] hover:bg-white/20 transition-all duration-300">
              <h3 className="text-white text-xl font-semibold">{event.title}</h3>
              <p className="text-blue-300 text-sm mt-1">{event.date}</p>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
