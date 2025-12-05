import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Hero() {
  const contentRef = useScrollAnimation({ once: true });
  const imageRef = useScrollAnimation({ once: true });

  return (
    <section id="home" className=" flex justify-center w-full px-4 sm:px-6 md:px-10 pt-32 pb-20  text-white">
      <div className="flex flex-col-reverse gap-10 md:items-center md:justify-between">
        
        {/* LEFT CONTENT */}
        <div ref={contentRef} className="flex flex-col gap-6 fade-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="text-blue-400">Tahsina Rashid Prapti</span><br />
            <span className="text-4xl">A MERN Stack Developer</span>
          </h1>
          <div classroom="">
            <div>
            <a 
              href="/resume/Resume of Tahsina Rashid Prapti (1).pdf" 
              download="Tahsina-Rashid-Prapti-Resume.pdf"
              className="items-center bg-white text-black font-semibold px-5 py-3 rounded-lg mt-2 hover:bg-gray-200 duration-300 hover:scale-105 shadow-md"
            >
              Download Resume
            </a>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/TahsinaRashid" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/tahsina-rashid-prapti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:tahsinarashid123@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope size={30} />
            </a>
          </div>
          </div>
          
        </div>

        {/* RIGHT IMAGE */}
        <div ref={imageRef} className="w-full flex justify-center fade-right zoom-in">
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url("https://i.postimg.cc/15jK5zSC/Whats-App-Image-2025-12-05-at-02-05-17-9ba19450.jpg")`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
