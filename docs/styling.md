# Styling

The Portfolio Sidebar project uses Tailwind CSS for styling, with some custom configurations.

## Tailwind CSS Configuration

The Tailwind CSS configuration is defined in the `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmPlex: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Global Styles

Global styles are defined in the `src/index.css` file, which includes Tailwind's base, components, and utilities:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'IBM Plex Sans', sans-serif;
}
```

## Component-Specific Styling

All styling is done using Tailwind CSS utility classes directly in the components. For example:

```jsx
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
```

## Responsive Design

The project uses Tailwind's responsive prefixes to create a fully responsive design:

- `sm:` - Small screens (640px and up)
- `md:` - Medium screens (768px and up)
- `lg:` - Large screens (1024px and up)
- `xl:` - Extra large screens (1280px and up)

Example of responsive styling:

```jsx
<div className="flex flex-col lg:flex-row items-center">
  {/* This div will be a column on mobile and a row on large screens */}
</div>
```

## Custom Gradients

The project uses custom gradients for certain UI elements:

```jsx
<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
  10+
</span>
```

## Animation Styling

Animations are implemented using both Tailwind CSS and Framer Motion:

### Tailwind Animations

```jsx
<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
```

### Framer Motion Animations

```jsx
<motion.div
  className="flex h-full lg:ml-[230px] p-2 lg:p-10 justify-center items-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ duration: 1 }}
>
  {/* Content */}
</motion.div>
