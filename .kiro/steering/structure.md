# Project Structure & Organization

## Root Directory

```
/
├── public/             # Static assets (images, favicon, etc.)
├── src/                # Source code
├── dist/               # Build output (generated)
├── .astro/             # Astro generated files
├── .kiro/              # Kiro configuration and steering
└── node_modules/       # Dependencies
```

## Source Structure (`src/`)

### Core Directories

- **`components/`** - Reusable UI components
  - `seo/` - SEO-related components (MetaTags, StructuredData)
  - `svg/` - Custom SVG illustrations organized by category
- **`layouts/`** - Page layout templates (Layout.astro)
- **`pages/`** - File-based routing with dynamic routes
- **`config/`** - Centralized configuration files
- **`content/`** - Content collections (markdown files)
- **`styles/`** - Global CSS and component-specific styles

### Configuration System (`src/config/`)

All site configuration is centralized in TypeScript files:

- `site.ts` - Site metadata, SEO, social links
- `company.ts` - Company information and branding
- `nav.ts` - Navigation structure
- `services.ts` - Service definitions
- `pages.ts` - Page content configuration
- `cta.ts` - Call-to-action shared configuration
- `assets.ts` - Image paths and asset references

### Content Collections (`src/content/`)

- **`portofoliu/`** - Portfolio/case study entries (markdown)
- **`servicii/`** - Service detail pages (markdown)
- `config.ts` - Zod schemas for content validation

### Component Organization

- **Atomic design approach** - Small, reusable components
- **Feature-based grouping** - Related components grouped together
- **SEO components** - Separated for clarity and reusability

## Key Patterns

### File Naming

- **Astro components**: PascalCase (e.g., `Header.astro`)
- **Config files**: camelCase (e.g., `site.ts`)
- **Content files**: kebab-case (e.g., `web-design.md`)

### Routing

- **Static routes**: Direct file mapping (`pages/about.astro` → `/about`)
- **Dynamic routes**: Bracket notation (`[...slug].astro`)
- **Content collections**: Automatic route generation

### Styling Architecture

- **CSS Variables**: Defined in `global.css` for consistent theming
- **Tailwind Classes**: Utility-first approach with custom variables
- **Component Styles**: Scoped styles within Astro components

### Asset Organization

- **Public assets**: Static files in `public/` directory
- **Processed assets**: Referenced through config files
- **Images**: Organized by category (logos, portfolio, services)

## Content Management

- **Type-safe content** via Zod schemas
- **Markdown frontmatter** for metadata
- **Centralized configuration** for easy updates
- **Multi-language support** (Romanian content)
