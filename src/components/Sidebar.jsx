import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-black text-white flex flex-col justify-between">
      <div>
        <div className="text-2xl font-ibmPlex pt-14 px-10">GR</div>
        <nav className="mt-24 px-10">
          <ul className="space-y-4 text-lg">
            <li>
              <a href="#home" className="relative text-xl hover:after:scale-x-100 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:top-1/2 after:h-1 after:w-full after:scale-x-0 after:origin-left after:-translate-y-1/2 after:bg-gradient-to-r after:from-purple-500 after:via-pink-500 after:to-orange-500 after:z-[-1]">HOME</a>
            </li>
            <li >
              <a href="#about" className="hover:text-orange-500">ABOUT</a>
            </li>
            <li >
              <a href="#services" className="hover:text-orange-500">SERVICES</a>
            </li>
            <li >
              <a href="#works" className="hover:text-orange-500">WORKS</a>
            </li>
            <li >
              <a href="#blogs" className="hover:text-orange-500">BLOGS</a>
            </li>
            <li >
              <a href="#contact" className="hover:text-orange-500">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-4 px-10 gap-4">          
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={28} color="#25D366" />
        </a>
        <a href="https://www.instagram.com/guilhermeribeiroo" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} color="#E4405F" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} color="#0077B5" />
        </a>
      </div>
      <div className="p-8 text-sm">
        <p>&copy; 2024 Guilherme Ribeiro.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Sidebar;
