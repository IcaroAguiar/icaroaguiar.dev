# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a React-based portfolio website built with Create React App showcasing Ícaro Aguiar's development work. The project uses a single-page architecture with section-based navigation and animated components.

This is a Frontend Portfolio application with the following components:

- **Frontend**: React single-page application with component-based architecture
- **Styling**: CSS modules with global theming and responsive design
- **Animations**: Scroll-triggered animations and typewriter effects

## Development Commands

### Portfolio Frontend (React)

```bash
npm start            # Start development server on http://localhost:3000
npm install          # Install dependencies
npm run build        # Build for production
npm test             # Run tests
npm run eject        # Eject from Create React App (one-way operation)
```

## Architecture Overview

### Frontend Structure

- **Single Page Application**: All sections rendered in `App.js` with anchor-based navigation
- **Component-based Architecture**: Modular React components with hooks
- **Animation System**: Intersection Observer API for scroll-triggered animations
- **Form Integration**: Formspree service integration for contact form

### Component Architecture

- **Core Layout**: Home, Sobre (About), Projetos (Projects), Contato (Contact), Footer sections
- **Reusable Components**: `AnimatedCard` provides consistent scroll-triggered animations
- **Animation Components**: `react-type-animation` for typewriter effects
- **Form Handling**: `@formspree/react` with validation and error handling

### Key Features

- Responsive single-page portfolio design
- Scroll-triggered animations using Intersection Observer
- Contact form with validation and submission handling
- Project showcase with dynamic data rendering

## Styling Architecture

- **Global Styles**: `global.css` defines CSS custom properties for theming
- **Color Scheme**: Sage green primary (#2a9d8f), off-white background (#f4f4f9)  
- **Typography**: Roboto font family from Google Fonts
- **Component Styles**: Each component has its own CSS file (e.g., `Home.css`, `Projetos.css`)
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

### Key Dependencies

- **UI Framework**: React 19.1.0 with styled-components 6.1.17
- **Animations**: `react-type-animation` for typewriter effects, `react-intersection-observer` for scroll animations
- **Icons**: `react-icons` for social media and UI icons
- **Forms**: `@formspree/react` for contact form handling (form ID: "xblyeyez")
- **Routing**: `react-router-dom` (though currently using anchor navigation)

## Code Style Guidelines

- **Language**: All comments in code should be written in Portuguese (Brazil)
- **Comments**: Use Portuguese for inline comments, function descriptions, and documentation
- **Variable/Function Names**: Keep in English following standard conventions
- **Error Messages**: User-facing messages should be in Portuguese

## Development Workflow Rules

### CRITICAL: Always Test Before Editing

**Before making ANY changes to the codebase, Claude MUST:**

1. **Start the React development server** and verify it's running without errors:

   ```bash
   npm start
   ```

   - Check that server starts on http://localhost:3000
   - Verify no compilation or runtime errors
   - Ensure all components load properly

2. **Test existing functionality** that will be affected by proposed changes:

   - Navigate through all portfolio sections
   - Test scroll animations and transitions
   - Verify contact form functionality
   - Check responsive design on different screen sizes

3. **Only after confirming the app works properly**, proceed with planned changes

### Error Prevention Protocol

- **Never submit code changes** without first verifying the application runs successfully
- **Always test modified functionality** after making changes
- **Check for runtime errors** in both browser console and terminal output
- **Verify animations and interactions** are working as expected
- **Test responsive behavior** across different device sizes
- **Run build process** to catch production build issues: `npm run build`

**Failure to follow this testing protocol will result in broken submissions that frustrate the user.**

## Content Management

- **Projects Data**: Hardcoded in `Projetos.js` component as array of objects
- **Personal Info**: Directly embedded in component JSX
- **Assets**: Profile image stored in `src/assets/`, public assets in `public/`
- **Form Configuration**: Formspree service with form ID "xblyeyez"

## Development Notes

- This is a portfolio site in Portuguese (pt-BR)
- Contact form uses Formspree service with form ID "xblyeyez"
- Projects section shows placeholder projects with disclaimer about upcoming real projects
- Uses semantic HTML with proper accessibility attributes
- Implements smooth scrolling and intersection observer for animations

## Common Issues and Troubleshooting

### Animation Performance Issues

If animations are laggy or not triggering properly:

1. **Check Intersection Observer**: Verify `react-intersection-observer` is properly configured
2. **CSS Performance**: Review CSS animations for performance bottlenecks
3. **Browser Compatibility**: Test animations across different browsers

### Build Issues

If the production build fails:

1. **Dependencies**: Run `npm install` to ensure all dependencies are installed
2. **Build Process**: Check for TypeScript or ESLint errors preventing build
3. **Asset Paths**: Verify all asset paths are correct for production build

## Recent Development History

### Session: Initial Setup - Portfolio Foundation

**Major Accomplishments:**
- ✅ **Initial Setup**: Created React portfolio with Create React App
- ✅ **Component Architecture**: Implemented section-based single-page design
- ✅ **Animation System**: Added scroll-triggered animations with Intersection Observer
- ✅ **Contact Form**: Integrated Formspree for contact form handling
- ✅ **Responsive Design**: Mobile-first responsive layout implementation

**Technical Changes Made:**

1. **Frontend Architecture**: 
   - Single-page application with anchor navigation
   - Component-based React structure with hooks
   - CSS module-based styling system

2. **User Experience**:
   - Smooth scroll animations
   - Typewriter effect for dynamic text
   - Form validation and submission handling

**Key Files:**
- `src/App.js` - Main application component and routing
- `src/components/` - Reusable component library
- `src/assets/` - Images and static assets
- `public/` - Public assets and meta configuration