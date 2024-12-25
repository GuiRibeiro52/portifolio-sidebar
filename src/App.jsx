import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        
        <Sidebar />
        <div className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
