import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative flex h-screen ml-[260px] p-10 items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl mx-auto font-ibmPlex">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-lg font-semibold italic">{t("contact.title")}</h2>
          <h1 className="text-5xl font-bold">{t("contact.title")}</h1>
          <p className="italic">{t("contact.address")}</p>
          <p className="text-3xl font-bold mt-4">+55 16 99466-4262</p>
          <p className="text-3xl font-bold mt-4">guiriibeiro52@gmail.com</p>
          <div className="flex gap-6 mt-4">
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
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={t("contact.name")}
                className="w-1/2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              />
              <input
                type="email"
                placeholder={t("contact.email")}
                className="w-1/2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              />
            </div>
            <textarea
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
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
