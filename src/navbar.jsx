import React from 'react';

const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 60; // Adjust this based on your navbar height
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold">johnRancel</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-gray-400">About Me</a></li>
        <li><a href="#proj" onClick={(e) => handleNavClick(e, 'proj')} className="hover:text-gray-400">Projects</a></li>
        <li><a href="#cert" onClick={(e) => handleNavClick(e, 'cert')} className="hover:text-gray-400">Certifications</a></li>
        {/* <li><a href="#exp" onClick={(e) => handleNavClick(e, 'exp')} className="hover:text-gray-400">Experience</a></li> */}
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
