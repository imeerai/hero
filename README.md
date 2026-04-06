# 🎨 Imeer.ai - 3D Developer Portfolio

> A modern and interactive 3D portfolio website built with React, Three.js, and Tailwind CSS.

<div align="center">
  <img src="public/logo.png" alt="Logo" width="100" />
  <br />
  
  ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
  ![Three.js](https://img.shields.io/badge/-Three.js-white?style=flat-square&logo=three.js)
  ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
</div>

---

## 📌 About

A stunning **3D portfolio website** for developers to showcase their work. Features beautiful animations, interactive 3D models, and fully responsive design.

---

## ✨ Features

- 🎯 **3D Hero Section** - Stunning 3D background with smooth animations
- 🎬 **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 📱 **Fully Responsive** - Perfect display on all devices
- 🌟 **Interactive Elements** - 3D Earth model, stars, and more
- 📧 **Contact Form** - Send real emails using EmailJS
- 🎓 **Education & Experience** - Timeline layout to showcase your history
- 🚀 **Projects Showcase** - Display your projects in elegant cards
- ⚡ **Fast & Optimized** - Lightning-fast development with Vite

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | UI components and state management |
| **Three.js** | 3D graphics and 3D models |
| **React Three Fiber** | Easy 3D objects in React |
| **Framer Motion** | Smooth animations and transitions |
| **Tailwind CSS** | Beautiful styling without writing CSS |
| **Vite** | Ultra-fast development server |
| **EmailJS** | Send emails directly from forms |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
# Check Git
git --version

# Node.js (v16+)
node --version
npm --version
```

### Installation

**Step 1: Clone the repository**

```bash
git clone https://github.com/imeerai/hero.git
cd hero
```

**Step 2: Install dependencies**

```bash
npm install
```

**Step 3: Set up environment variables**

Create a `.env` file and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Get these credentials from [EmailJS](https://www.emailjs.com/)

**Step 4: Run the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser! 🎉

---

## 📁 Folder Structure

```
hero/
├── src/
│   ├── components/        # React components
│   │   ├── sections/      # Page sections (About, Projects, etc)
│   │   ├── canvas/        # 3D components
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Portfolio data (projects, skills, etc)
│   ├── styles/            # Global styles
│   └── utils/             # Helper functions
├── public/                # Static assets
│   ├── images/            # Images and icons
│   └── cv/                # CV/Resume files
└── package.json           # Dependencies
```

---

## 🎯 How to Customize

### Add Your Data

Edit `src/data/portfolio-data.js` and add your information:

```javascript
export const projectsData = [
  {
    title: "My Awesome Project",
    description: "Project description goes here",
    image: "path/to/image.png",
    link: "https://github.com/...",
  },
  // Add more projects...
];
```

### Customize 3D Models

Modify 3D models in `src/components/canvas/`

### Change Colors and Fonts

Update your theme in `tailwind.config.cjs`

---

## 📦 Available Commands

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

---

## 🤝 Contributing

Want to contribute? Here's how:

1. **Fork** the repository
2. Create a new **branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

---

## 🐛 Issues

Found a bug? Here's what to do:

1. Check [GitHub Issues](https://github.com/imeerai/hero/issues)
2. Open a new issue with details
3. Include screenshots if possible

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💡 Tips & Tricks

- **Animations too slow?** → Adjust durations in `src/utils/motion.js`
- **3D models slow?** → Reduce quality or optimize models
- **Improve Lighthouse score?** → Compress images and add lazy loading
- **Performance on mobile?** → Use device simulation tools to debug

---

## 🔗 Links

- 📍 [Live Demo](https://imeer.ai)
- 💻 [GitHub Repository](https://github.com/imeerai/hero)
- 📧 [Contact](https://imeer.ai#contact)
- 🐦 [Twitter](https://twitter.com/imeerai)

---

## 🙏 Show Your Support

Give this project a star if it helped you! ⭐

---

<div align="center">
  <p>Made with ❤️ by Imeer</p>
  <p>© 2026 Imeer.ai. All rights reserved.</p>
</div>
