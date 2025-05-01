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

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

SEO.defaultProps = {
  title: '',
  description: '',
  image: ''
};

export default SEO;
