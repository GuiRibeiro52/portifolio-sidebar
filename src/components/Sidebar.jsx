import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-black text-white flex flex-col justify-between">
      <div>
        <div className="flex pt-14 px-10">
          <img src="logoGR.svg" alt="GR logo" className="bg-white size-9/12" />
        </div>
        <nav className="mt-24 px-10">
          <ul className="space-y-4 text-xl text-gray-400">
            {[ 
              { id: "home", label: "HOME", path: "/" },
              { id: "about", label: "ABOUT", path: "/about" },
              { id: "services", label: "SERVICES", path: "/services" },
              { id: "works", label: "WORKS", path: "/works" },
              { id: "blogs", label: "BLOGS", path: "/blogs" },
              { id: "contact", label: "CONTACT", path: "/contact" },
            ].map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => handleLinkClick(link.id)}
                  className={({ isActive }) =>
                    `relative text-xl group ${isActive ? "text-white" : ""}`
                  }
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-1 w-full transform origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-transform duration-500 ease-in-out ${
                      activeLink === link.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between mt-4 px-10 gap-4">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={40} color="#25D366" />
        </a>
        <a
          href="https://www.instagram.com/guilhermeribeiroo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} color="#E4405F" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} color="#0077B5" />
        </a>
      </div>
      <div className="p-8 text-sm opacity-80">
        <p>&copy; 2024 Guilherme Ribeiro.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Sidebar;
