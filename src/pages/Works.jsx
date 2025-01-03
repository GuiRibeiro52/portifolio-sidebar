import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { works } from "../data";

function Works() {
  const { t } = useTranslation();
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleCardClick = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <motion.div
      className="relative flex h-full lg:ml-[260px] p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center w-full max-w-6xl mt-16 lg:mt-0 mx-auto font-ibmPlex">
        <div className="mb-12">
          <h2 className="text-sm font-semibold italic">
            {t("works.sectionTitle")}
          </h2>
          <h1 className="text-5xl font-bold mt-4">{t("works.pageTitle")}</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.slice(0, visibleCount).map((work) => (
            <div
              key={work.id}
              className="relative flex flex-col justify-between space-y-4 bg-white shadow-lg rounded-3xl cursor-pointer overflow-hidden"
              onClick={() => handleCardClick(work)}
            >
              <img
                src={work.image}
                alt={t(work.titleKey)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold italic">
                  {t(work.subtitle)}
                </p>
                <h3 className="text-2xl leading-none font-bold mt-4">
                  {t(work.titleKey)}
                </h3>
                <p className="flex items-center mt-2 text-lg font-semibold text-black">
                  →
                </p>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selectedWork && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onClick={closeModal}
              >
                <motion.div
                  className="bg-white rounded-lg overflow-hidden w-[90%] max-w-4xl shadow-lg"
                  initial={{ x: "-100vw", opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100vw", opacity: 0 }}
                  transition={{ duration: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedWork.image}
                    alt={t(selectedWork.titleKey)}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-4xl font-bold">
                      {t(selectedWork.titleKey)}
                    </h2>
                    {selectedWork.descriptionKey ? (
                      t(selectedWork.descriptionKey)
                        .split("\n")
                        .map((line, index) =>
                          line.trim() ? (
                            <p key={index} className="mb-2 italic">
                              {line}
                            </p>
                          ) : (
                            <br key={index} />
                          )
                        )
                    ) : (
                      <p className="mb-2 italic">{t("works.noDescription")}</p>
                    )}
                    <div className="flex gap-4 mt-6">
                      <a
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:bg-gradient-to-t hover:scale-110 duration-500 transition-transform"
                        href={selectedWork.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("works.visitSite")}
                      </a>
                      <button
                        className="px-4 py-2 bg-black text-white hover:scale-110 duration-500 transition-transform"
                        onClick={closeModal}
                      >
                        {t("works.close")}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="flex justify-center gap-10">
          <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:scale-110 duration-500 transition-transform">Check my GitHub</button>
        </div>
        {visibleCount < works.length && (
          <div className="flex justify-center mt-12">
            <button
              className="px-6 py-3 bg-black text-white font-semibold hover:scale-110 duration-500 transition-transform"
              onClick={loadMore}
            >
              {t("works.loadMore")}
            </button>
          </div>
        )}
        </div>
        
      </div>
    </motion.div>
  );
}

export default Works;
