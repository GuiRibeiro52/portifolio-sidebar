# Deployment

The Portfolio Sidebar project is configured for deployment on Vercel, but can be deployed on other platforms as well.

## Vercel Deployment

The project includes a `vercel.json` file for Vercel configuration:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This configuration ensures that all routes are redirected to `index.html`, which is necessary for single-page applications (SPAs) with client-side routing.

### Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Create an account on [Vercel](https://vercel.com) if you don't have one.
3. Click "New Project" on the Vercel dashboard.
4. Import your Git repository.
5. Configure the project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
7. Click "Deploy".

## Other Deployment Options

### Netlify

1. Push your code to a Git repository.
2. Create an account on [Netlify](https://netlify.com) if you don't have one.
3. Click "New site from Git" on the Netlify dashboard.
4. Import your Git repository.
5. Configure the project:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Add environment variables in the "Site settings" > "Build & deploy" > "Environment" section.
7. Create a `netlify.toml` file in the root of your project:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

1. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

2. Add the following scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add a `base` property to your `vite.config.js`:

```js
export default defineConfig({
  base: '/portifolio-sidebar/',
  // other config
});
```

4. Deploy the site:

```bash
npm run deploy
```

### Firebase Hosting

1. Install the Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase in your project:

```bash
firebase init
```

4. Select "Hosting" and configure the project.
5. Build your project:

```bash
npm run build
```

6. Deploy to Firebase:

```bash
firebase deploy
```

## Environment Variables

Regardless of the deployment platform, you'll need to set the following environment variables:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## Custom Domain

To use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy).
2. Add the domain to your deployment platform (Vercel, Netlify, etc.).
3. Configure the DNS settings at your domain registrar to point to your deployment platform.
4. Wait for DNS propagation (can take up to 48 hours).
5. Enable HTTPS for your domain on your deployment platform.
