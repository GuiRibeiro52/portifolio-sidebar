import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen justify-center overflow-hidden">
      <motion.div
        className="flex h-full ml-[260px] p-10 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="lg:text-8xl font-ibmPlex text-sm">
              {t("home.title")} <span className="font-bold">GUILHERME <br />RIBEIRO</span>...
            </h1>
            <p className="text-3xl font-ibmPlex">
              <span className="font-bold italic">{t("home.subtitle")}</span>
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img src="src/assets/images/Img.png" alt="Guilherme" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
