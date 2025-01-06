import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import brazilFlag from "../assets/images/icons/brazilFlag.png";
import usaFlag from "../assets/images/icons/usaFlag.png";

function Sidebar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = currentPath === "/" ? "home" : currentPath.slice(1);
    setActiveLink(currentLink);
  }, [location.pathname]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>     
      <nav className="bg-black text-white fixed w-full z-50 flex items-center justify-between px-4 py-3 lg:hidden">
        <div className="flex items-center">
          <img src="logoGR.svg" alt="GR Logo" className="h-8 mr-4" />
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => changeLanguage("en")} className="focus:outline-none">
            <img
              src={usaFlag}
              alt="USA flag"
              className="w-8 rounded-full hover:scale-110 transition-transform"
            />
          </button>
          <button onClick={() => changeLanguage("pt")} className="focus:outline-none">
            <img
              src={brazilFlag}
              alt="Brazil flag"
              className="w-8 rounded-full hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </nav>

      
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white flex flex-col justify-between z-40 transform transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex lg:w-56 w-[220px]`}
      >
        
        <div>
          <div className="flex justify-center items-center py-8 px-6 mt-3">
            <img
              src="LogotipoGR.png"
              alt="GR logo"
              className="w-[60%] max-w-[150px] lg:max-w-full"
            />
          </div>
          <nav className="px-4">
            <ul className="space-y-3 text-lg text-gray-400 ml-8">
              {[
                { id: "home", label: t("sidebar.home"), path: "/" },
                { id: "about", label: t("sidebar.about"), path: "/about" },
                { id: "works", label: t("sidebar.works"), path: "/works" },
                { id: "contact", label: t("sidebar.contact"), path: "/contact" },
              ].map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    onClick={() => handleLinkClick(link.id)}
                    className={({ isActive }) =>
                      `relative text-lg group ${
                        isActive ? "text-white" : ""
                      }`
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

        
        <div className="px-6">
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=5516994664262"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a
              href="https://www.instagram.com/guilhermeribeiroo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => changeLanguage("en")}
              className="focus:outline-none"
            >
              <img
                src={usaFlag}
                alt="USA flag"
                className="w-6 rounded-full hover:scale-110 transition-transform"
              />
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              className="focus:outline-none"
            >
              <img
                src={brazilFlag}
                alt="Brazil flag"
                className="w-6 rounded-full hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        
        <div className="p-4 text-xs text-center text-gray-500">
          <p>&copy; 2024 Guilherme Ribeiro.</p>
          <p>{t("sidebar.rights")}</p>
        </div>
      </div>

      
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 lg:hidden z-30"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      )}
    </>
  );
}

export default Sidebar;
