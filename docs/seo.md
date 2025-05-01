# SEO

The Portfolio Sidebar project implements SEO best practices using React Helmet Async.

## SEO Component

The project includes a reusable `SEO.jsx` component that handles meta tags and other SEO-related elements:

```jsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function SEO({ title, description, image }) {
  const { t } = useTranslation();
  const location = useLocation();
  
  const defaultTitle = 'Guilherme Ribeiro | Portfolio';
  const defaultDescription = t('seo.description', 'Front-End Developer based in Brazil');
  const defaultImage = '/LogotipoGR.png';
  const siteUrl = 'https://guilhermeribeiro.dev.com';
  
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = `${siteUrl}${image || defaultImage}`;
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
}
```

## Usage in Pages

The SEO component is used in each page component with specific title and description:

```jsx
// Home.jsx
<SEO 
  title="Guilherme Ribeiro | Home"
  description={t('home.subtitle')}
/>

// About.jsx
<SEO 
  title="Guilherme Ribeiro | About"
  description={t('about.description')}
  image="/assets/images/Img2.png"
/>

// Works.jsx
<SEO 
  title="Guilherme Ribeiro | Works"
  description={t("works.sectionTitle")}
/>

// Contact.jsx
<SEO 
  title="Guilherme Ribeiro | Contact"
  description={t("contact.title")}
/>
```

## Helmet Provider

The React Helmet Async provider is initialized in the `main.jsx` file:

```jsx
import { HelmetProvider } from "react-helmet-async";

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

## robots.txt

The project includes a `robots.txt` file in the public directory to control search engine crawling:

```
User-agent: *
Allow: /
```

## sitemap.xml

The project includes a `sitemap.xml` file in the public directory to help search engines discover and index all pages:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://guilhermeribeiro.dev.com/</loc>
    <lastmod>2024-05
