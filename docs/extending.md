# Extending the Project

This guide provides information on how to extend and customize the Portfolio Sidebar project.

## Adding a New Page

To add a new page to the project:

1. Create a new component in the `src/pages` directory:

```jsx
// src/pages/NewPage.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from '../components/SEO';

function NewPage() {
  const { t } = useTranslation();

  return (
    <div>
      <SEO 
        title="Guilherme Ribeiro | New Page"
        description="Description of the new page"
      />
      <motion.div
        className="flex h-full lg:ml-[230px] p-2 lg:p-10 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold">New Page</h1>
          <p className="mt-4">Content of the new page</p>
        </div>
      </motion.div>
    </div>
  );
}

export default NewPage;
```

2. Add the new page to the lazy loading imports in `App.jsx`:

```jsx
const NewPage = lazy(() => import("./pages/NewPage"));
```

3. Add a new route in the `Routes` component in `App.jsx`:

```jsx
<Routes location={location} key={location.pathname}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/works" element={<Works />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

4. Add a new navigation link in the `Sidebar.jsx` component:

```jsx
{[
  { id: "home", label: t("sidebar.home"), path: "/" },
  { id: "about", label: t("sidebar.about"), path: "/about" },
  { id: "works", label: t("sidebar.works"), path: "/works" },
  { id: "contact", label: t("sidebar.contact"), path: "/contact" },
  { id: "new-page", label: t("sidebar.newPage"), path: "/new-page" },
].map((link) => (
  // ...
))}
```

5. Add translations for the new page in the `i18n.js` file:

```js
resources: {
  en: {
    translation: {
      sidebar: {
        // ...
        newPage: "NEW PAGE",
      },
      // ...
      newPage: {
        title: "New Page Title",
        description: "New page description",
      },
    },
  },
  pt: {
    translation: {
      sidebar: {
        // ...
        newPage: "NOVA PÁGINA",
      },
      // ...
      newPage: {
        title: "Título da Nova Página",
        description: "Descrição da nova página",
      },
    },
  },
}
```

## Adding a New Component

To add a new reusable component:

1. Create a new component in the `src/components` directory:

```jsx
// src/components/NewComponent.jsx
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

function NewComponent({ title, description }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-
