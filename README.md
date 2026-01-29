# Dr. Priyanka Singh - Academic Portfolio Website

A modern, professional academic website for Associate Professor / Senior Researcher Priyanka Singh, showcasing research, publications, and achievements in nanomedicine and biomaterials.

## 🌐 Live Site

Visit the live site at: [https://adni02.github.io/portfolio_website/](https://adni02.github.io/portfolio_website/)

## ✨ Features

- **Modern Tech Stack**: Built with Vite + React + TypeScript + Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dynamic Publications**: Loads and renders publications from CSV with search and filtering
- **Privacy-Preserving Contact**: Email obfuscation and secure contact form
- **Professional Design**: Clean, academic aesthetic with excellent typography
- **Fast Performance**: Optimized build with code splitting and lazy loading
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## 📋 Pages

1. **Home** - Hero section, research vision, key metrics, and highlights
2. **About** - Biography, education, and current position
3. **Research** - Research vision, scientific excellence areas, and impact metrics
4. **Experience** - Work history and professional development
5. **Grants** - Funding secured as main and co-applicant
6. **Awards** - Recognition and honors
7. **Leadership** - Academic service and community engagement
8. **Talks** - Recent invited talks and conference presentations
9. **Supervision** - PhD, postdoc, and student supervision
10. **Publications** - Dynamic list with search/filter (92 publications from Google Scholar)
11. **Contact** - Privacy-preserving contact form

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Adni02/portfolio_website.git
cd portfolio_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173/portfolio_website/`

## 🔨 Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📦 Project Structure

```
portfolio_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── data/
│   ├── cv_data.json           # Structured CV data (DO NOT EDIT - auto-generated)
│   ├── scholar_publications_dom.csv  # Publications from Google Scholar
│   ├── Priyanka Singh_CV_2026_Updated Jan 23.pdf
│   └── *.jpeg                 # Profile and lab photos
├── src/
│   ├── components/
│   │   ├── Layout.tsx         # Main layout wrapper
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Research.tsx
│   │   ├── Experience.tsx
│   │   ├── Grants.tsx
│   │   ├── Awards.tsx
│   │   ├── Leadership.tsx
│   │   ├── Talks.tsx
│   │   ├── Supervision.tsx
│   │   ├── Publications.tsx   # Dynamic CSV parsing
│   │   └── Contact.tsx        # Privacy-preserving form
│   ├── data/
│   │   └── cv_data.json       # Structured CV content
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 📝 Updating Content

### Update Publications

1. Export your Google Scholar publications to CSV
2. Replace `data/scholar_publications_dom.csv` with the new file
3. Ensure the CSV has these columns: `link`, `title`, `author`, `journal`, `journal_issue`, `year`, `citation`
4. Rebuild and deploy:
```bash
npm run build
git add data/scholar_publications_dom.csv
git commit -m "Update publications"
git push
```

### Update CV Content

1. Update the PDF in `data/Priyanka Singh_CV_2026_Updated Jan 23.pdf`
2. If content structure changed significantly, update `src/data/cv_data.json` accordingly
3. Commit and push changes

### Update Photos

1. Add new photos to `data/` directory
2. Update image references in relevant page components
3. Commit and push

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Ensure GitHub Pages is enabled in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

2. Push to main branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

3. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Build the site
   - Deploy to GitHub Pages

4. Check deployment status in the Actions tab

### First-Time Setup

If this is the first deployment:

1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to main branch to trigger the workflow

## 🔧 Configuration

### Base Path

The site is configured for GitHub Pages with the base path `/portfolio_website/`. This is set in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio_website/',
})
```

If deploying to a different location, update this value.

### Contact Email

The contact form uses email obfuscation for privacy. The email is split into parts in `src/pages/Contact.tsx`. To update:

```typescript
const getEmail = () => {
  const part1 = 'yourname'
  const part2 = '123'
  const part3 = 'provider'
  const part4 = 'com'
  return `${part1}${part2}@${part3}.${part4}`
}
```

## 🎨 Customization

### Colors

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e40af',
    dark: '#1e3a8a',
    light: '#3b82f6',
  },
  accent: {
    DEFAULT: '#059669',
    dark: '#047857',
    light: '#10b981',
  },
}
```

### Fonts

The site uses Inter font from Google Fonts (loaded in `index.html`).

## 📄 Data Sources

All content is derived from:
- **Primary Source**: `data/Priyanka Singh_CV_2026_Updated Jan 23.pdf`
- **Publications**: `data/scholar_publications_dom.csv` (exported from Google Scholar)
- **Images**: Local photos in `data/` directory

**No content is invented or fabricated** - all information is extracted directly from these source files.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 7
- **Deployment**: GitHub Pages (via GitHub Actions)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio website. If you notice any issues:

1. Check the Issues tab
2. Create a new issue with details
3. Or submit a pull request with fixes

## 📧 Contact

For inquiries, use the contact form on the website or reach out via:
- ORCID: [0000-0001-7654-5339](https://orcid.org/0000-0001-7654-5339)
- LinkedIn: [priya4](https://linkedin.com/in/priya4)

## 📜 License

© 2026 Dr. Priyanka Singh. All rights reserved.

---

Built with ❤️ using Vite + React + TypeScript
