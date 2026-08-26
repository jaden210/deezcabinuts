# DeezCabinuts - Custom Cabinetry Website

A modern, responsive website for DeezCabinuts custom cabinetry business in Cedar City, UT. Built with Angular 20 and Server-Side Rendering (SSR) for optimal SEO performance.

## Features

- **Modern Design**: Clean, professional design inspired by Bay Area Cabinetry
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Server-side rendering and structured data for better search rankings
- **Fast Performance**: Optimized loading times and smooth animations
- **Custom Color Palette**: Based on acorn brown theme with warm, professional colors

## Tech Stack

- **Frontend**: Angular 20 with TypeScript
- **Styling**: SCSS with CSS custom properties
- **SSR**: Angular Universal for server-side rendering
- **Analytics**: Firebase Analytics
- **Deployment**: Firebase Hosting (configured)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Angular CLI 20

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deezcabnuts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
# Build for production with SSR
npm run build

# Build for production without SSR
npm run build:client
```

### Development Commands

```bash
# Start development server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Build for production
npm run build

# Serve production build locally
npm run serve:ssr
```

## Project Structure

```
src/
├── app/
│   ├── home/                 # Homepage component
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.scss
│   ├── app.component.ts      # Main app component
│   ├── app.component.html    # App template (header/footer)
│   ├── app.component.scss    # App styles
│   ├── app.routes.ts         # Routing configuration
│   ├── app.config.ts         # App configuration
│   └── firebase.config.ts    # Firebase configuration
├── assets/                   # Static assets
│   └── logo.svg             # Company logo
├── styles.scss              # Global styles
└── index.html              # Main HTML file
```

## Customization

### Colors

The color palette is defined in CSS custom properties in `src/styles.scss`:

```scss
:root {
  --primary-brown: #8B4513;    /* Main acorn brown */
  --secondary-brown: #A0522D;  /* Lighter brown */
  --accent-brown: #CD853F;     /* Warm accent */
  --light-brown: #DEB887;      /* Very light brown */
  --cream: #F5F5DC;           /* Background color */
  --dark-brown: #654321;       /* Text color */
}
```

### Content

Update the following files to customize content:

- `src/app/home/home.component.ts` - Services and testimonials
- `src/app/app.html` - Header navigation and footer
- `src/index.html` - Meta tags and SEO information

### Images

Replace placeholder images in the `src/assets/` folder:

- `logo.svg` - Company logo (currently a placeholder acorn)
- Add workshop images, project photos, etc.

## SEO Features

- Server-side rendering for better search engine indexing
- Structured data (JSON-LD) for rich snippets
- Meta tags for social media sharing
- Semantic HTML structure
- Optimized images and assets

## Firebase Configuration

The project includes Firebase configuration for:

- Analytics tracking
- Future hosting deployment
- Database integration (when needed)

Update the Firebase config in `src/app/firebase.config.ts` with your project details.

## Deployment

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (if not already done):
```bash
firebase init hosting
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Other Hosting Options

The built application can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## Future Enhancements

- [ ] Service pages (Kitchen, Bathroom, Closet, Office)
- [ ] Portfolio gallery
- [ ] Contact form with email integration
- [ ] Blog section
- [ ] Online estimate calculator
- [ ] Customer reviews integration
- [ ] Image optimization and lazy loading
- [ ] PWA features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to DeezCabinuts.

## Contact

For questions or support, contact:
- Email: info@deezcabnuts.com
- Phone: (435) XXX-XXXX
- Location: Cedar City, UT
