# Portfolio Website

My blackout-esque portfolio website showcasing projects, skills, and contact information.


##  Features

- **Page Intergration**: reveal-on-scroll animations and transitions
- **Multi-platform Design**: Works on mobile, tablet, and desktop
- **Base UI**: Built with Tailwind CSS 4.x, aimed for a contemporary look 
- **Font & Icons**: Font Awesome and Lucide React icons

## Tech Stack

### Frontend
- **React 19**
- **Vite 6.x**
- **Tailwind CSS 4.x**

### Development Tools
- **ESLint** - Code linting with React specific rules
- **React Helmet** - Dynamic document head management
- **React Icons** - used for its icon library

### Deployment
- **GitHub Pages** - For site hositng

### Vite Configuration
- Base URL configured for GitHub Pages deployment
- React plugin for JSX transformation
- Tailwind CSS Vite plugin for easier building


## Naviagation

```
Portfolio Website/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Home.jsx       # Landing section
│   │   │   ├── About.jsx      # About me & skills
│   │   │   ├── Projects.jsx   # Project showcase
│   │   │   └── Contact.jsx    # Contact form
│   │   ├── LoadingScreen.jsx  # Animated loader
│   │   ├── NavBar.jsx         # Desktop navigation
│   │   ├── MobileMenu.jsx     # Mobile navigation
│   │   └── RevealOnScroll.jsx # Scroll animation wrapper
│   ├── assets/          # Images and media
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   ├── App.css          # Component styles
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```


## Author

**Filipe Ramos**
- LinkedIn: [@filipearamos](https://www.linkedin.com/in/filipearamos/)
