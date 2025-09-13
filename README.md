# Personal Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS, ready for deployment on GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with smooth animations and hover effects
- **Complete Sections**: 
  - Navigation with smooth scrolling
  - Hero section with call-to-action
  - About section with profile placeholder
  - Skills grid with technology badges
  - Projects showcase with links
  - Experience timeline
  - Contact section with social links
- **GitHub Pages Ready**: Pre-configured for easy deployment

## Tech Stack

- React 19.1.1
- TailwindCSS 4.1.13
- Responsive Grid Layout
- Smooth Scrolling Navigation
- CSS Animations

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### 3. Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

### Step 1: Update Configuration
1. Open `package.json`
2. Replace `"homepage": "https://yourusername.github.io/portfolio"` with your actual GitHub username

### Step 2: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 3: Create GitHub Repository
1. Go to GitHub and create a new repository named `portfolio`
2. Add the remote origin:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Select `gh-pages` branch as source
4. Your site will be available at `https://yourusername.github.io/portfolio`

## Customization

### Personal Information
Update the following files with your information:

**src/components/Hero.js**
- Replace "Your Name" with your actual name
- Update the tagline

**src/components/About.js**
- Replace placeholder text with your bio
- Add your profile photo

**src/components/Projects.js**
- Update project details, descriptions, and links
- Replace placeholder screenshots

**src/components/Experience.js**
- Update with your actual work experience

**src/components/Contact.js**
- Update email, LinkedIn, and GitHub links

### Styling
- Colors can be customized in `tailwind.config.js`
- Additional animations can be added to the theme
- Component styles are in individual component files

## Available Scripts

- `npm start` - Runs development server
- `npm run build` - Builds for production
- `npm test` - Runs test suite
- `npm run deploy` - Deploys to GitHub Pages
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Navbar.js      # Navigation with mobile menu
│   ├── Hero.js        # Hero section with CTA
│   ├── About.js       # About section with bio
│   ├── Skills.js      # Skills grid
│   ├── Projects.js    # Project showcase
│   ├── Experience.js  # Experience timeline
│   └── Contact.js     # Contact with social links
├── App.js             # Main app component
├── index.js           # React entry point
└── index.css          # Global styles with Tailwind
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).