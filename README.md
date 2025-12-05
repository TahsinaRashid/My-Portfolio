# React Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and TypeScript-ready setup.

## Features

- ✨ Modern and clean design
- 🎨 Dark mode support
- 📱 Fully responsive
- ⚡ Fast performance with React
- 🎯 Material Icons integration
- 📧 Contact form with validation
- 🔗 Social media links

## Project Structure

```
portfolio/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── Hobbies.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css       # Tailwind CSS styles
│   ├── index.css           # Global styles
│   ├── App.jsx             # Main App component
│   └── index.jsx           # Entry point
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "My Portfolio"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build

Create a production build:
```bash
npm build
```

## Components

### Header
Navigation bar with links and contact button

### Hero
Main landing section with introduction and CTA

### Journey
Timeline of career milestones

### Hobbies
Personal interests and hobbies section

### Skills
Technical skills organized by category

### Projects
Showcase of portfolio projects

### Contact
Contact form and social media links

### Footer
Copyright and social links

## Customization

### Colors
Edit `tailwind.config.js` to change the primary color and theme colors.

### Content
Edit component files in `src/components/` to update portfolio content.

### Dark Mode
The app includes built-in dark mode support. Toggle by adding `dark` class to the root element.

## Technologies

- React 18
- Tailwind CSS 3
- Material Icons
- PostCSS
- Autoprefixer

## License

MIT License - feel free to use this for your portfolio

## Support

For issues or questions, please create an issue in the repository.
