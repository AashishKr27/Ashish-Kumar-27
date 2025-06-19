# Portfolio Website

A modern and responsive portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.<br/>This site showcases your skills, projects, and personal information in a sleek and developer-friendly layout.<br/>Ideal for personal branding, job applications, and freelance profiles.

## 🚀 Features

- Built with **Next.js 13** and **React 18**
- Styled using **Tailwind CSS**
- Animated transitions using **Framer Motion**
- Type animation for dynamic text effects
- Responsive and mobile-friendly design
- Organized project and skills sections
- Contact form with Resend integration

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, React Type Animation
- **Icons**: Heroicons, CoreUI Icons
- **Contact Email API**: Resend

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## 🧪 Running the App

Start the development server:
```bash
npm run dev
```

Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
new-portfolio/
│
├── public/                     # Static assets (images, icons, etc.)
│   └── assets/                 # Custom assets (profile picture, project screenshots)
│
├── components/                 # Reusable UI components
│   ├── Navbar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer section
│   ├── HeroSection.jsx         # Intro section with animated text
│   ├── AboutSection.jsx        # About Me content
│   ├── Skills.jsx              # Skills grid
│   ├── Projects.jsx            # Project showcase cards
│   └── ContactForm.jsx         # Email form powered by Resend
│
├── pages/                      # Next.js routing pages
│   ├── index.tsx               # Main homepage
│   ├── _app.tsx                # App entry (global CSS & layout)
│   └── api/                    # API routes
│       └── send.ts             # API for handling contact form submission
│
├── styles/                     # Custom styling and overrides
│   └── globals.css             # Global styles and Tailwind utilities
│
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Files/folders to ignore in Git
├── jsconfig.json               # JS/TS path aliases and IntelliSense
├── next.config.js              # Next.js configuration
├── package.json                # Project metadata and dependencies
├── postcss.config.js           # PostCSS config for Tailwind
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # You are here 📘
```

## ✨ Customization Tips

- **Update your content** in `/pages/index.tsx` and other components.
- Replace placeholder images in `/public`.
- Configure your Tailwind setup in `tailwind.config.js`.
- Customize animations in the Framer Motion configs.

## ⚙️ Scripts

- `npm run dev` — Start development server
- `npm run build` — Create production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Live Demo

[Checkout Portfolio](https://ashish-kumar-27.vercel.app/)

## This project is licensed under the MIT License.

---

> Designed and developed by Ashish Kumar
