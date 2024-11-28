import React, { useState } from "react";
import myPhoto from "../assets/my-photo1.jpg"; // Replace with your actual photo path
 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed w-full z-20 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo with Avatar */}
        <div className="flex items-center">
          <img
            src={myPhoto}
            alt="Your Name"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 object-cover"
          />
          <span className="text-xl md:text-2xl font-bold">Imad Moujahid</span>
        </div>

        {/* Hamburger Icon (visible on small screens, white color) */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul
          className={`absolute md:static top-16 left-0 bg-black md:bg-transparent w-full md:w-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0 flex flex-col md:flex-row md:gap-6`}
        >
          <li>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="block py-2 px-4 text-sm md:text-base font-medium hover:bg-gray-700 md:hover:bg-transparent rounded-md"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-sm md:text-base font-medium hover:bg-gray-700 md:hover:bg-transparent rounded-md"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-sm md:text-base font-medium hover:bg-gray-700 md:hover:bg-transparent rounded-md"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-sm md:text-base font-medium hover:bg-gray-700 md:hover:bg-transparent rounded-md"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;