import { motion } from "framer-motion";
import { works } from "../data"; 

function Works() {
  return (
    <motion.div
      className="flex h-screen ml-[250px]"
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
          {works.map((work) => (
            <div key={work.id} className="flex justify-between space-y-4 gap-8 shadow-lg  rounded-3xl">
              <div className="flex flex-col justify-between p-6">
                <p className="text-sm font-semibold italic">UX case study</p>
                <h3 className="text-[40px] leading-none font-bold mt-4">{work.title}</h3>
                <a href="#" className="flex items-center mt-2 text-xl font-semibold text-black hover:underline">→</a>
              </div>
              <img
                src={work.image}
                alt={work.title}
                className="w-[315px] h-64 object-cover rounded-r-3xl shadow-lg"
              />          
            </div>
          ))}
        </div>
      
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
            Load more →
          </button>
        </div>
    </div>
    </motion.div>
    
  );
}

export default Works;
