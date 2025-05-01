# Portfolio Sidebar - Technical Documentation

This document provides detailed technical documentation for the Portfolio Sidebar project, a modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Table of Contents

- [Portfolio Sidebar - Technical Documentation](#portfolio-sidebar---technical-documentation)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Project Structure](#project-structure)
  - [Documentation](#documentation)

## Project Overview

Portfolio Sidebar is a personal portfolio website for Guilherme Ribeiro, a Front-End Developer based in Brazil. The website showcases his skills, experience, and projects with a modern, responsive design featuring a sidebar navigation.

The project is built with:
- React 18
- Vite 6
- Tailwind CSS 3
- React Router 7
- i18next for internationalization
- Framer Motion for animations
- EmailJS for contact form functionality
- React Helmet Async for SEO optimization
- Jest for testing

## Project Structure

```
portifolio-sidebar/
├── public/                  # Static assets
│   ├── logoGR.svg           # Logo SVG
│   ├── LogotipoGR.png       # Logo PNG
│   ├── robots.txt           # Robots file for SEO
│   └── sitemap.xml          # Sitemap for SEO
├── src/                     # Source code
│   ├── assets/              # Assets used in the application
│   │   └── images/          # Image assets
│   │       └── icons/       # Icon assets
│   ├── components/          # Reusable components
│   │   ├── SEO.jsx          # SEO component
│   │   └── Sidebar.jsx      # Sidebar navigation component
│   ├── pages/               # Page components
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Home.jsx         # Home page
│   │   ├── Home.spec.jsx    # Tests for Home page
│   │   └── Works.jsx        # Works/Portfolio page
│   ├── App.jsx              # Main App component
│   ├── data.js              # Data for projects/works
│   ├── index.css            # Global CSS
│   └── main.jsx             # Entry point
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── babel.config.json        # Babel configuration
├── eslint.config.js         # ESLint configuration
├── i18n.js                  # Internationalization setup
├── index.html               # HTML entry point
├── jest.config.js           # Jest configuration
├── jest.setup.js            # Jest setup
├── package.json             # NPM package configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vercel.json              # Vercel deployment configuration
└── vite.config.js           # Vite configuration
```

## Documentation

For detailed documentation on specific aspects of the project, please refer to the following files:

1. [Features](./docs/features.md) - Overview of the key features of the project
2. [Components](./docs/components.md) - Detailed information about the components used in the project
3. [Internationalization](./docs/internationalization.md) - How the multilingual support is implemented
4. [Styling](./docs/styling.md) - Information about the styling approach using Tailwind CSS
5. [Routing and Navigation](./docs/routing.md) - How routing and navigation are implemented
6. [Animation](./docs/animation.md) - Details about the animations used in the project
7. [Contact Form](./docs/contact-form.md) - How the contact form is implemented with EmailJS
8. [SEO](./docs/seo.md) - SEO optimization techniques used in the project
9. [Testing](./docs/testing.md) - Testing setup and examples
10. [Deployment](./docs/deployment.md) - Deployment options and configuration
11. [Performance Optimization](./docs/performance.md) - Performance optimization techniques
12. [Extending the Project](./docs/extending.md) - How to extend and customize the project
13. [Adding New Components](./docs/extending-components.md) - How to add new components and features
