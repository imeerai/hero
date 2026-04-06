# 🎨 Imeer.ai - 3D Developer Portfolio

> ایک جدید اور انٹرایکٹو 3D portfolio جو React, Three.js اور Tailwind CSS سے بنایا گیا ہے۔

<div align="center">
  <img src="public/logo.png" alt="Logo" width="100" />
  <br />
  
  ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
  ![Three.js](https://img.shields.io/badge/-Three.js-white?style=flat-square&logo=three.js)
  ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
</div>

---

## 📌 کیا ہے؟

یہ ایک **modern 3D portfolio website** ہے جو developers اپنا کام showcase کرنے کے لیے استعمال کر سکتے ہیں۔ اس میں stunning animations، interactive 3D models، اور responsive design ہے۔

---

## ✨ خصوصیات

- 🎯 **3D Hero Section** - Stunning 3D background اور animations
- 🎬 **Smooth Animations** - Framer Motion سے beautiful transitions
- 📱 **Fully Responsive** - کسی بھی device پر perfect
- 🌟 **Interactive Elements** - 3D Earth model, Stars, اور مزید
- 📧 **Contact Form** - EmailJS کے ساتھ real emails بھیجیں
- 🎓 **Education & Experience** - Timeline format میں اپنی history دکھائیں
- 🚀 **Projects Showcase** - اپنے projects کو elegant cards میں دکھائیں
- ⚡ **Fast & Optimized** - Vite کے ساتھ lightning-fast development

---

## 🛠️ Technology Stack

| Technology            | فائدہ                                      |
| --------------------- | ------------------------------------------ |
| **React.js**          | UI components اور state management         |
| **Three.js**          | 3D graphics اور models                     |
| **React Three Fiber** | React میں 3D objects آسانی سے استعمال کریں |
| **Framer Motion**     | Smooth animations اور transitions          |
| **Tailwind CSS**      | Beautiful styling بغیر CSS لکھے            |
| **Vite**              | Super fast development server              |
| **EmailJS**           | Form سے directly emails بھیجیں             |

---

## 🚀 شروع کریں

### Prerequisites

پہلے یہ چیزیں install کریں:

```bash
# Git کی ضرورت ہے
git --version

# Node.js (v16+)
node --version
npm --version
```

### Installation

**Step 1: Repository کو clone کریں**

```bash
git clone https://github.com/imeerai/hero.git
cd hero
```

**Step 2: Dependencies install کریں**

```bash
npm install
```

**Step 3: Environment variables setup کریں**

`.env` file بنائیں اور یہ لکھیں:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** یہ credentials [EmailJS](https://www.emailjs.com/) سے حاصل کریں

**Step 4: Development server چلائیں**

```bash
npm run dev
```

اب [http://localhost:5173](http://localhost:5173) پر کھولیں! 🎉

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
│   ├── images/            # Images اور icons
│   └── cv/                # CV/Resume files
└── package.json           # Dependencies
```

---

## 🎯 کیسے استعمال کریں

### اپنا Data ڈالیں

`src/data/portfolio-data.js` میں اپنی information ڈالیں:

```javascript
export const projectsData = [
  {
    title: "My Awesome Project",
    description: "یہاں project کی تفصیل لکھیں",
    image: "path/to/image.png",
    link: "https://github.com/...",
  },
  // مزید projects...
];
```

### 3D Models کو Customize کریں

`src/components/canvas/` میں 3D models کو modify کریں۔

### Colors اور Fonts تبدیل کریں

`tailwind.config.cjs` میں اپنے colors سیٹ کریں۔

---

## 📦 Available Commands

```bash
# Development میں کام کریں
npm run dev

# Production کے لیے build کریں
npm run build

# Build کو locally test کریں
npm run preview

# Linting
npm run lint
```

---

## 🤝 Contributing

اگر کوئی improvement کے ideas ہیں تو:

1. **Fork** کریں repository کو
2. نیا **branch** بنائیں (`git checkout -b feature/amazing-feature`)
3. **Commit** کریں اپنی changes (`git commit -m 'Add amazing feature'`)
4. **Push** کریں branch کو (`git push origin feature/amazing-feature`)
5. **Pull Request** کھولیں

---

## 🐛 Issues

اگر کوئی problem آئے تو:

1. [GitHub Issues](https://github.com/imeerai/hero/issues) میں check کریں
2. اگر نہیں ہے تو نیا issue بنائیں
3. Problem کی تفصیل اور screenshot دیں

---

## 📄 License

یہ project **MIT License** کے تحت ہے۔ دیکھیں [LICENSE](LICENSE) فائل۔

---

## 💡 Tips & Tricks

- **Animations slow ہیں?** → `src/utils/motion.js` میں durations کم کریں
- **3D models slow ہیں?** → Quality کم کریں یا models optimize کریں
- **Lighthouse score بہتر بنانا ہے?** → Images کو compress کریں اور lazy loading add کریں
- **Mobile پر slow ہے?** → Device simulation tools استعمال کریں

---

## 🔗 Links

- 📍 [Live Demo](https://imeer.ai)
- 💻 [GitHub Repository](https://github.com/imeerai/hero)
- 📧 [Contact](https://imeer.ai#contact)
- 🐦 [Twitter](https://twitter.com/imeerai)

---

## 🙏 شکریہ

اس project کو star دیں اگر یہ مددگار ہے! ⭐

---

<div align="center">
  <p>Made with ❤️ by Imeer</p>
  <p>© 2026 Imeer.ai. All rights reserved.</p>
</div>
