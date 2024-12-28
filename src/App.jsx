import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="flex">      
      <Sidebar />      
      <div className="flex-1 bg-white overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
