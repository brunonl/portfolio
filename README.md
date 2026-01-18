# Bruno Meireles - Portfolio

Personal portfolio website built with Next.js 16, TypeScript, and SCSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS with BEM methodology
- **Animations:** CSS animations + IntersectionObserver
- **i18n:** Custom context for PT/EN

## 📁 Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components (Hero, Header, Projects, etc.)
├── constants/        # Application constants (URLs, config)
├── contexts/         # React contexts (Language)
├── data/             # Static data (projects, experience, translations)
├── hooks/            # Custom hooks (useScrollReveal, useTypingEffect)
├── styles/           # SCSS architecture
│   ├── _base.scss    # Reset, CSS variables, elements
│   ├── _utilities.scss # Utility classes
│   ├── _variables.scss # Design tokens
│   ├── _mixins.scss  # Reusable mixins
│   ├── components/   # Component styles
│   └── sections/     # Section-specific styles
└── types/            # TypeScript interfaces
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## 📝 License

MIT
