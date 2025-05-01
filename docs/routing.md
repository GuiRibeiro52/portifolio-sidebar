# Routing and Navigation

The Portfolio Sidebar project uses React Router v7 for routing and navigation.

## Setup

The routing setup is defined in the `App.jsx` file:

```jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const location = useLocation();

  return (
    <div className="flex">      
      <Sidebar />      
      <div className="flex-1 bg-white overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  );
}
```

The `BrowserRouter` is initialized in the `main.jsx` file:

```jsx
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
```

## Navigation Links

Navigation links are defined in the `Sidebar.jsx` component using the `NavLink` component from React Router:

```jsx
import { NavLink, useLocation } from "react-router-dom";

// Inside the Sidebar component
<ul className="space-y-3 text-lg text-gray-400 ml-8">
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
          `relative text-lg group ${
            isActive ? "text-white" : ""
          }`
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
```

## Active Link Highlighting

The active link is highlighted using a combination of React Router's `isActive` prop and a custom state:

```jsx
const [activeLink, setActiveLink] = useState("");

useEffect(() => {
  const currentPath = location.pathname;
  const currentLink = currentPath === "/" ? "home" : currentPath.slice(1);
  setActiveLink(currentLink);
}, [location.pathname]);
```

## Lazy Loading

All page components are lazy loaded to improve performance:

```jsx
const Home = lazy(() => import("
