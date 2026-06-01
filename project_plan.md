# Project Plan - Pragathi Lingamsetty Portfolio

## Folder Structure
```
pragathi-lingamsetty/
├── src/
│   ├── components/
│   │   ├── ProfileHeader.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── FeaturedProjects.jsx
│   │   └── ActionLinks.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tailwind Configuration - Navy/Gold Theme

### Custom Colors
- **navy-800**: #1a237e (Deep Navy Blue for text)
- **navy-900**: #0d1442 (Darker Navy)
- **sapphire-500**: #4f46e5 (Primary Accent - Royal/Sapphire Blue)
- **sapphire-600**: #4338ca
- **sapphire-700**: #3730a3
- **gold-300**: #f5d78e (Light Gold)
- **gold-400**: #e8c76e
- **gold-500**: #d4a84b (Main Gold)
- **gold-600**: #c49a3c
- **off-white**: #f8f9fa (Background)

### Custom Animation
- **shimmer**: A subtle, shimmering light-gold glow effect that activates on hover/tap
  - 0%, 100%: No glow, transparent border
  - 50%: Gold glow with box-shadow and border

### Design System
- **Background**: Clean Off-White (#f8f9fa)
- **Bento Cards**: Stark White with subtle drop shadows
- **Typography**: Deep Navy Blue (#1a237e) for high contrast
- **Primary Accent**: Royal/Sapphire Blue (#4f46e5) for interactive elements
- **Interactivity**: Gold shimmer animation on hover/tap

## Print CSS Requirements
- Remove default browser headers/footers with @page margin
- Hide UI elements: Download Resume button, hover states, animations, shadows
- Transform links to raw text URLs for print readability
- Clean, professional paper resume format
