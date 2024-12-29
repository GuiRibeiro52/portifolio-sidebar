import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works } from "../data";
import { Link } from "react-router-dom";

function Works() {
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
      className="relative flex h-full ml-[260px] p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center w-full max-w-6xl mx-auto font-ibmPlex">
        <div className="mb-12">
          <h2 className="text-sm font-semibold italic">Work</h2>
          <h1 className="text-5xl font-bold mt-4">RECENT PROJECT</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.slice(0, visibleCount).map((work) => ( 
            <div
              key={work.id}
              className="relative flex justify-between space-y-4 gap-8 shadow-lg rounded-3xl cursor-pointer"
              onClick={() => handleCardClick(work)}
            >
              <div className="flex flex-col justify-between p-6">
                <p className="text-sm font-semibold italic">UX case study</p>
                <h3 className="text-[40px] leading-none font-bold mt-4">{work.title}</h3>
                <p className="flex items-center mt-2 text-xl font-semibold text-black">→</p>
              </div>
              <img
                src={work.image}
                alt={work.title}
                className="w-[315px] h-64 object-cover rounded-r-3xl shadow-lg"
              />
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
                transition={{ duration: 0.5 }}
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
                    alt={selectedWork.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-4xl font-bold">{selectedWork.title}</h2>
                    {selectedWork.description ? (
                      selectedWork.description
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
                      <p className="mb-2 italic">No aditional description.</p>
                    )}
                    <div className="flex gap-4 mt-6">
                      <Link
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:bg-gradient-to-t hover:scale-110 duration-500 transition-transform"
                        to={selectedWork.link}
                      >
                        Visit Site
                      </Link>
                      <button
                        className="px-4 py-2 bg-black text-white hover:scale-110 duration-500 transition-transform"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {visibleCount < works.length && ( 
          <div className="flex justify-center mt-12">
            <button
              className="px-6 py-3 bg-black text-white font-semibold hover:scale-110 duration-500 transition-transform"
              onClick={loadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </motion.div>    
  );
}
export default Works;
