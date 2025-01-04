import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from '../assets/images/Img.png'

function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex lg:h-screen justify-center overflow-hidden">
      <motion.div
        className="flex h-full lg:ml-[260px] p-2 lg:p-10 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center mt-20 lg:mt-0 justify-center w-full max-w-6xl mx-auto">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6 mt-auto">
            <h1 className="lg:text-6xl xl:text-8xl font-ibmPlex text-5xl">
              {t("home.title")} <span className="font-bold">GUILHERME <br />RIBEIRO</span>...
            </h1>
            <p className="text-3xl font-ibmPlex">
              <span className="font-bold italic">{t("home.subtitle")}</span>
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img src={img} alt="Guilherme" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
