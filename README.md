# Portfolio Website

A modern (blackout) portfolio website showcasing projects, skills, and contact information. Built with React and deployed on GitHub Pages.

🔗 **Live Site**: [https://Dialexy.github.io](https://Dialexy.github.io)

## ✨ Features

- **Smooth Animations**: reveal-on-scroll animations and transitions
- **Responsive Design**: optimized for mobile, tablet, and desktop
- **Modern UI**: Built with Tailwind CSS 4.x, contemporary look
- **Loading Experience**: animated loading screen with typewriter effect
- **Icon Integration**: Font Awesome and Lucide React icons

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **Vite 6.x**
- **Tailwind CSS 4.x**

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **React Helmet** - Dynamic document head management
- **React Icons** - used for its icon library

### Deployment
- **GitHub Pages** - For site hositng
- **gh-pages** - Automated deployment workflow

## 📁 Project Structure

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

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Dialexy/Dialexy.github.io.git
cd Dialexy.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make the site live at your GitHub Pages URL

## 🎨 Customization

### Updating Content

- **Personal Info**: Edit `src/components/sections/Home.jsx`
- **About Section**: Modify `src/components/sections/About.jsx` to update skills and bio
- **Projects**: Update `src/components/sections/Projects.jsx` with your project data
- **Contact Info**: Customize `src/components/sections/Contact.jsx`

### Styling

The project uses Tailwind CSS with a custom dark theme:
- Primary colors: Blue gradient (`from-blue-500 to-cyan-400`)
- Background: Black with gray text
- Hover effects: Glow and lift animations

Modify `src/index.css` for global styles or component files for specific changes.

## 🔧 Configuration

### Vite Configuration
- Base URL configured for GitHub Pages deployment
- React plugin for JSX transformation
- Tailwind CSS Vite plugin for optimized builds

### Tailwind CSS
- Version 4.x with Vite integration
- Custom animations and transitions
- Responsive breakpoints for mobile-first design

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Filipe Ramos**
- LinkedIn: [@filipearamos](https://www.linkedin.com/in/filipearamos/)
- GitHub: [@Dialexy](https://github.com/Dialexy)
