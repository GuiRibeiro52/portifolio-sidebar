import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import brazilFlag from "../assets/images/flag-icons/brazilFlag.png"
import usaFlag from "../assets/images/flag-icons/usaFlag.png"

function Sidebar() {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
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
        <a href="https://api.whatsapp.com/send?phone=5516994664262" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={40} color="#25D366" />
        </a>
        <a href="https://www.instagram.com/guilhermeribeiroo" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} color="#E4405F" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0077B5" />
        </a>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2  text-white rounded "
        ><img src={usaFlag} alt="brazil flag" className="w-8 rounded-full hover:scale-125 duration-1000 transition-transform"/>
        </button>
        <button
          onClick={() => changeLanguage("pt")}
          className="px-4 py-2  text-white rounded-full"
        ><img src={brazilFlag} alt="brazil flag" className="w-8 rounded-full hover:scale-125 duration-1000 transition-transform"/>
        </button>
      </div>
      <div className="p-8 text-sm opacity-80">
        <p>&copy; 2024 Guilherme Ribeiro.</p>
        <p>{t("sidebar.rights")}</p>
      </div>
    </div>
  );
}

export default Sidebar;
