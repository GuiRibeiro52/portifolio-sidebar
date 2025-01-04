import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError(t("contact.errorRequired"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("contact.errorInvalidEmail"));
      return;
    }

    setError("");

    emailjs
      .send(
        "service_nb5a36q",
        "template_83pdmyr",
        {
          from_name: name,
          from_email: email,
          message,
        },
        "nV7Ia5TjTPrMdynlF"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setError(t("contact.errorSubmission"));
        }
      );
  };

  const closeSuccessModal = () => {
    setSuccess(false);
  };

  return (
    <motion.div
      className="relative flex min-h-screen lg:ml-[260px] p-4 md:p-10 items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl mt-16 lg:mt-0 mx-auto font-ibmPlex gap-4 space-y-6 lg:space-y-0 ">
        <div className="space-y-6 px-4 w-[288px] sm:w-auto">
          <h2 className="text-lg font-semibold italic">{t("contact.title")}</h2>
          <h1 className="text-5xl font-bold">{t("contact.title")}</h1>
          <p className="italic">{t("contact.address")}</p>
          <p className="text-xl sm:text-3xl font-bold mt-4">+55 16 99466-4262</p>
          <p className="text-xl sm:text-3xl font-bold mt-4">guiriibeiro52@gmail.com</p>
          <div className="flex gap-6 mt-4 text-sm sm:text-3xl">
            <a
              href="https://www.facebook.com/guilherme.ribeiro.7549?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>
            <a
              href="https://www.instagram.com/guilhermeribeiroo"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-ribeiro52/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-8 rounded-lg">
          <h2 className="text-white text-4xl font-bold mb-6">
            {t("contact.project")}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
                className="w-full md:w-1/2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
                className="w-full md:w-1/2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.message")}
              className="w-full bg-transparent border-b border-white text-white focus:outline-none placeholder-white resize-none h-20"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white font-semibold hover:scale-110 duration-500 transition-transform"
            >
              {t("contact.submit")}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>

      {success && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="bg-white  p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold">{t("contact.successMessageTitle")}</h2>
            <p className="mt-4">{t("contact.successMessageBody")}</p>
            <button
              className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              onClick={closeSuccessModal}
            >
              OK
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Contact;
