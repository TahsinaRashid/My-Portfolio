import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const headingRef = useScrollAnimation({ once: true });
  const contentRef = useScrollAnimation({ once: true });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section id="contact" className="flex-grow py-12 md:py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-12 max-w-2xl mx-auto">
        <div ref={headingRef} className="fade-up flex flex-col gap-3 text-center w-full">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Get in Touch</p>
          <p className="text-gray-200 font-normal leading-normal">Feel free to reach out for collaborations, job opportunities or just to say hello!</p>
        </div>

        <div ref={contentRef} className="fade-up w-full space-y-6">
          <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border border-gray-600 dark:border-gray-700 rounded-lg py-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-gray-600 dark:text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#232f48] shrink-0 size-10">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">tahsinarashid123@gmail.com</p>
            </div>
            <div className="shrink-0">
              <button onClick={() => handleCopy('tahsinarashid123@gmail.com')} className="text-primary text-sm font-medium leading-normal hover:opacity-80 transition-opacity">Copy</button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between border border-gray-600 dark:border-gray-700 rounded-lg py-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-gray-600 dark:text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#232f48] shrink-0 size-10">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <p className="text-white text-base font-normal leading-normal flex-1 truncate">+88-01748614843</p>
            </div>
            <div className="shrink-0">
              <button onClick={() => window.location.href = 'tel:+8801748614843'} className="text-primary text-sm font-medium leading-normal hover:opacity-80 transition-opacity">Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
