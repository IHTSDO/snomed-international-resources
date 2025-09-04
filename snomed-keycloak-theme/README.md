# SNOMED International Keycloak Theme

A comprehensive, branded theme for Keycloak v3 that follows SNOMED International branding guidelines and provides a modern, accessible user experience.

## Overview

This theme provides a complete visual and functional overhaul for Keycloak authentication pages, including:

- **Login Pages** - Modern, branded login forms with enhanced UX
- **Account Management** - User-friendly account settings and profile management
- **Admin Console** - Professional administrative interface
- **Welcome Pages** - Engaging onboarding experience
- **Email Templates** - Branded email communications
- **Responsive Design** - Mobile-first approach with desktop optimization

## Features

### 🎨 **Branding & Design**
- SNOMED International color palette and typography
- Professional, healthcare-focused visual identity
- Consistent branding across all pages
- Modern, clean interface design

### ♿ **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- High contrast support
- Focus indicators and skip links

### 📱 **Responsive Design**
- Mobile-first approach
- Responsive breakpoints for all devices
- Touch-friendly interface elements
- Optimized for various screen sizes

### 🚀 **Enhanced UX**
- Smooth animations and transitions
- Interactive form elements
- Password strength indicators
- Loading states and feedback
- Error handling and validation

### 🔧 **Technical Features**
- CSS custom properties (variables)
- Modern CSS Grid and Flexbox
- Progressive enhancement
- Cross-browser compatibility
- Performance optimized

## Installation

### 1. **Download the Theme**
```bash
# Clone or download the theme files
git clone <repository-url>
cd snomed-keycloak-theme
```

### 2. **Deploy to Keycloak**
```bash
# Copy the theme to your Keycloak themes directory
cp -r theme-resources/theme/snomed /path/to/keycloak/themes/
```

### 3. **Configure in Keycloak Admin Console**
1. Log into Keycloak Admin Console
2. Navigate to **Realm Settings** → **Themes**
3. Select **SNOMED** as the default theme for:
   - Login Theme
   - Account Theme
   - Admin Theme
   - Email Theme
   - Welcome Theme

### 4. **Restart Keycloak**
```bash
# Restart your Keycloak server
./standalone.sh
# or
./domain.sh
```

## Theme Structure

```
snomed-keycloak-theme/
├── theme-resources/
│   └── theme/
│       └── snomed/
│           ├── login/           # Login page templates
│           │   ├── login.ftl
│           │   ├── template.ftl
│           │   └── css/
│           │       └── snomed-login.css
│           ├── account/         # Account management
│           │   └── account.ftl
│           ├── admin/           # Admin console
│           │   └── admin.ftl
│           ├── welcome/         # Welcome/onboarding
│           │   └── welcome.ftl
│           ├── email/           # Email templates
│           │   ├── email.ftl
│           │   └── template.ftl
│           └── common/          # Shared resources
│               ├── css/
│               │   └── snomed-theme.css
│               └── js/
│                   └── snomed-theme.js
├── theme.properties             # Theme configuration
└── README.md                   # This file
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization:

```css
:root {
  --snomed-primary: #0066CC;        /* Primary blue */
  --snomed-primary-dark: #003366;   /* Dark blue */
  --snomed-accent: #FF6600;         /* Accent orange */
  --snomed-text: #333333;           /* Text color */
  --snomed-background: #FFFFFF;     /* Background */
}
```

### Typography
Font families can be customized in the CSS variables:

```css
:root {
  --snomed-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Spacing
Consistent spacing system using CSS variables:

```css
:root {
  --snomed-spacing-xs: 4px;
  --snomed-spacing-sm: 8px;
  --snomed-spacing-md: 16px;
  --snomed-spacing-lg: 24px;
  --snomed-spacing-xl: 32px;
  --snomed-spacing-xxl: 48px;
}
```

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Internet Explorer** 11+ (with polyfills)

## Dependencies

- **Keycloak** 3.0+
- **Modern web browsers** with CSS Grid and Flexbox support
- **Optional**: Inter font family for optimal typography

## Development

### Building the Theme
```bash
# Install dependencies (if any)
npm install

# Build CSS (if using preprocessors)
npm run build

# Watch for changes
npm run watch
```

### Testing
```bash
# Run tests
npm test

# Lint CSS
npm run lint:css

# Validate HTML
npm run validate:html
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines
- Follow the existing code style
- Ensure accessibility compliance
- Test across different browsers
- Update documentation as needed
- Maintain responsive design principles

## Support

For support and questions:

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Community**: Join the SNOMED International community forums
- **Email**: Contact the development team

## License

This theme is licensed under the same license as SNOMED International resources. Please refer to the LICENSE file for details.

## Changelog

### Version 1.0.0
- Initial release
- Complete theme implementation
- Responsive design
- Accessibility features
- SNOMED International branding

## Acknowledgments

- SNOMED International for branding guidelines
- Keycloak community for the excellent platform
- Contributors and testers
- Healthcare professionals for feedback

---

**Note**: This theme is designed specifically for SNOMED International use cases. For other organizations, please customize the branding elements and content accordingly.
