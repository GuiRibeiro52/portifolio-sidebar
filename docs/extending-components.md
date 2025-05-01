# Adding New Components

This guide provides information on how to add new components to the Portfolio Sidebar project.

## Creating a New Component

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
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
    </div>
  );
}

NewComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewComponent;
```

2. Import and use the component in a page:

```jsx
import NewComponent from '../components/NewComponent';

// Inside a page component
<NewComponent 
  title="Component Title" 
  description="Component description" 
/>
```

## Adding New Translations

To add new translations:

1. Add new translation keys and values to the `i18n.js` file:

```js
resources: {
  en: {
    translation: {
      // ...
      newSection: {
        title: "New Section Title",
        description: "New section description",
      },
    },
  },
  pt: {
    translation: {
      // ...
      newSection: {
        title: "Título da Nova Seção",
        description: "Descrição da nova seção",
      },
    },
  },
}
```

2. Use the translations in your components:

```jsx
const { t } = useTranslation();

// ...

<h2>{t("newSection.title")}</h2>
<p>{t("newSection.description")}</p>
```

## Adding New Styles

To add new styles:

1. Add new utility classes directly in your components using Tailwind CSS:

```jsx
<div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
  {/* Content */}
</div>
```

2. For custom styles that can't be achieved with Tailwind, extend the Tailwind configuration in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-color': '#ff6b6b',
      },
      fontFamily: {
        'custom-font': ['Custom Font', 'sans-serif'],
      },
      // Add other custom styles
    },
  },
  // ...
}
```

## Adding New Features

### Adding Dark Mode

To add dark mode support:

1. Update the Tailwind configuration:

```js
module.exports = {
  darkMode: 'class', // or 'media' for OS-level preference
  // ...
}
```

2. Add a dark mode toggle component:

```jsx
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
```

3. Use dark mode variants in your components:

```jsx
<div className="bg-white dark:bg-gray-900 text-black dark:
