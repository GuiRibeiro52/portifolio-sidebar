# Internationalization

The Portfolio Sidebar project uses i18next for internationalization, supporting both English and Portuguese languages with automatic language detection.

## Setup

The internationalization setup is defined in the `i18n.js` file at the root of the project:

```jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    resources: {
      en: {
        translation: {
          // English translations
        }
      },
      pt: {
        translation: {
          // Portuguese translations
        }
      }
    }
  });

export default i18n;
```

## Usage in Components

The internationalization is used throughout the application with the `useTranslation` hook:

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("some.translation.key")}</h1>
    </div>
  );
}
```

## Language Switching

Language switching is implemented in the Sidebar component:

```jsx
const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

// In the JSX
<button onClick={() => changeLanguage("en")}>
  <img src={usaFlag} alt="USA flag" />
</button>
<button onClick={() => changeLanguage("pt")}>
  <img src={brazilFlag} alt="Brazil flag" />
</button>
```

## Translation Structure

The translations are organized by page and component:

- `sidebar`: Translations for the sidebar navigation
- `home`: Translations for the home page
- `about`: Translations for the about page
- `works`: Translations for the works/portfolio page
- `contact`: Translations for the contact page

Each section contains all the text that appears on that page or component.

## Adding a New Language

To add a new language:

1. Add a new language object to the `resources` object in `i18n.js`:

```jsx
resources: {
  en: {
    translation: {
      // English translations
    }
  },
  pt: {
    translation: {
      // Portuguese translations
    }
  },
  es: {
    translation: {
      // Spanish translations
    }
  }
}
```

2. Add a language switcher button in the Sidebar component:

```jsx
<button onClick={() => changeLanguage("es")}>
  <img src={spainFlag} alt="Spain flag" />
</button>
```

3. Import the flag image and add it to the imports:

```jsx
import spainFlag from "../assets/images/icons/spainFlag.png";
