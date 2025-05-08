# Business Website Template

A professional and customizable Astro-based business website template with SEO optimization, responsive design, and modular configuration.

## 🚀 Features

- **Modern Design** with Tailwind CSS 4
- **SEO Optimized** with structured data and meta tags
- **Fully Responsive** for all screen sizes
- **Performance Focused** built with Astro
- **Customizable** with easy-to-update configuration files
- **Icon Integration** using Astro Icon

## 📋 Pages

- **Home** - Landing page with hero, services, testimonials and CTA
- **About** - Company information, values, and team
- **Services** - Comprehensive overview of offered services
- **Contact** - Contact form and company information

## 🔧 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/business-website-template.git
cd business-website-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🛠️ Customization

### Configuration Files

All site configuration is located in the `src/config` directory:

- **site.ts** - Website name, description, and SEO information
- **nav.ts** - Navigation links for header and footer
- **company.ts** - Company information and CTA content
- **services.ts** - Service descriptions and icons
- **assets.ts** - Image paths and assets

### Update Company Information

Edit `src/config/company.ts` to change:

- Company name and tagline
- Contact information
- Social media links
- Call-to-action text and links

### Customize Navigation

Edit `src/config/nav.ts` to update:

- Main navigation links
- Footer navigation categories
- Page links and titles

### Modify Services

Edit `src/config/services.ts` to update:

- Service titles and descriptions
- Service icons (using Iconify icon names)
- Service detail page links

### Change Assets and Images

Edit `src/config/assets.ts` to update image paths for:

- Hero section images
- Team member photos
- Service illustrations
- Logo and partner logos

## 📦 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components
│   │   └── seo/        # SEO related components
│   ├── config/         # Site configuration
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components
│   ├── scripts/        # JavaScript files
│   └── styles/         # CSS files
└── package.json        # Project dependencies
```

## 🖼️ Icons

This template uses [Astro Icon](https://github.com/natemoo-re/astro-icon) for icons, which provides access to popular icon sets like Material Design Icons.

To use an icon:

```astro
<Icon name="mdi:account" class="h-6 w-6" />
```

## 🏗️ Adding New Pages

1. Create a new file in `src/pages/` with the `.astro` extension
2. Use the Layout component and add your content
3. Update the navigation config if needed

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify](https://iconify.design/)