import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10 animate-fadeDown">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-4">
        
        {/* Logo */}
        <h2 className="text-white text-xl font-semibold tracking-tight animate-fadeSlide">
          Tahsina Rashid Prapti
        </h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" }
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]"
            >
              {label}
            </a>
          ))}

          <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 duration-300 hover:scale-105 hover:translate-y-[-2px] shadow-sm">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white transition-transform duration-200 active:scale-90"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0f172a] text-white px-6 pb-6 animate-slideDownSmooth">
          <div className="flex flex-col gap-5 text-sm font-medium mt-2">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" }
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className="hover:text-gray-300 transition-all duration-300 hover:translate-x-2"
              >
                {label}
              </a>
            ))}

            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg mt-2 hover:bg-gray-200 duration-300 hover:scale-105 shadow-sm">
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
