# Key Components

## Sidebar.jsx

The sidebar component is the main navigation element of the website. It includes:

- Responsive design with a collapsible menu for mobile devices
- Navigation links to all main pages
- Social media links
- Language switching functionality
- Copyright information

```jsx
function Sidebar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle active link highlighting
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = currentPath === "/" ? "home" : currentPath.slice(1);
    setActiveLink(currentLink);
  }, [location.pathname]);

  // Handle language switching
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // ...rest of the component
}
```

## SEO.jsx

The SEO component handles all meta tags and SEO-related information for each page. It uses React Helmet Async to manage the document head.

```jsx
function SEO({ title, description, image }) {
  const { t } = useTranslation();
  const location = useLocation();
  
  const defaultTitle = 'Guilherme Ribeiro | Portfolio';
  const defaultDescription = t('seo.description', 'Front-End Developer based in Brazil');
  const defaultImage = '/LogotipoGR.png';
  const siteUrl = 'https://guilhermeribeiro.dev.com';
  
  // ...rest of the component
}
```

## Page Components

### Home.jsx

The home page component displays a hero section with the developer's name and title. It uses Framer Motion for animations.

### About.jsx

The about page component displays personal information, skills, and background. It includes:

- Personal details (name, age, location, etc.)
- Professional experience
- Skills and expertise
- A personal quote

### Works.jsx

The works page component displays a portfolio of projects. It includes:

- Grid layout of project cards
- Modal view for project details
- "Load more" functionality for pagination
- Links to live projects

### Contact.jsx

The contact page component includes a contact form and personal contact information. It uses EmailJS for form submission.
