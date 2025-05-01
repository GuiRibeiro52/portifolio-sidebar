# Animation

The Portfolio Sidebar project uses Framer Motion for animations and transitions.

## Page Transitions

Each page has a transition animation when navigating between pages. This is implemented in the `App.jsx` file using Framer Motion's `AnimatePresence`:

```jsx
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
```

## Page Component Animations

Each page component has its own animation defined using Framer Motion's `motion` components:

```jsx
<motion.div
  className="flex h-full lg:ml-[230px] p-2 lg:p-10 justify-center items-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ duration: 1 }}
>
  {/* Page content */}
</motion.div>
```

## Modal Animations

The Works page uses Framer Motion to animate the project details modal:

```jsx
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
          {/* Modal content */}
        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

## Mobile Menu Animation

The mobile menu uses Framer Motion for the overlay animation:

```jsx
{isMenuOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-70 lg:hidden z-30"
    onClick={toggleMenu}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  ></motion.div>
)}
```

## CSS Transitions

In addition to Framer Motion, the project also uses CSS transitions for simpler animations:

```jsx
<span
  className={`absolute left-0 bottom-0 h-1 w-full transform origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-transform duration-500 ease-in-out ${
    activeLink === link.id
      ? "scale-x-100"
      : "scale-x-0 group-hover:scale-x-100"
  }`}
></span>
```

## Loading Animation

The page loader uses a simple CSS animation:

```jsx
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);
```

## Hover Animations

Many elements have hover animations using Tailwind CSS:

```jsx
<a
  className="
