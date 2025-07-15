# Technology Stack

## Framework & Build System

- **Astro 5.11.0** - Static site generator with component islands architecture
- **Node.js** (version 18+) - Runtime environment
- **TypeScript** - Type safety and better developer experience

## Styling & UI

- **Tailwind CSS 4.1.11** - Utility-first CSS framework with CSS variables approach
- **CSS Variables** - Custom properties for theme customization in `src/styles/global.css`
- **Astro Icon 1.1.5** - Icon system using Iconify icons (primarily Material Design Icons)

## Content Management

- **Astro Content Collections** - Type-safe content management
- **Markdown** - Content authoring format
- **Zod schemas** - Content validation and type generation

## Key Dependencies

- `@tailwindcss/vite` - Tailwind integration
- `@iconify-json/mdi` - Material Design Icons

## Common Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Project Setup

```bash
npm install          # Install dependencies
```

## Build Output

- Static files generated in `dist/` directory
- Optimized for deployment to any static hosting provider

## Performance Features

- Static site generation for fast loading
- Component islands for selective hydration
- Optimized asset bundling
- SEO-friendly HTML output
