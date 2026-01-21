# Theme System Documentation

## Overview
The website now has a **fully integrated dual-theme system** that allows users to switch between two distinct color schemes across **all pages**:

### Theme 1: Green-White (Default)
- **Primary Colors**: Dark green (#071b14)
- **Accent**: Emerald green (#1f7a5c)
- **Background**: Dark green with white sections
- **Highlights**: Lime green (#84cc16)
- **Perfect for**: Professional, nature-focused branding

### Theme 2: Blue-Red-Yellow
- **Primary Colors**: Navy blue (#0a1f3d)
- **Accent**: Red (#dc2626)
- **Background**: Dark blue with yellow sections
- **Highlights**: Yellow (#eab308)
- **Perfect for**: Bold, modern, high-contrast design

## How to Use

### Toggle Button
A theme toggle button is prominently located in the **Navbar** (top right area):
- Click the **Theme** button with the palette icon 🎨
- The theme will **instantly switch** across all pages
- Your preference is **automatically saved** in localStorage
- Theme persists across browser sessions

### Where Themes Apply
The theme system affects:
- ✅ **Landing page** (hero, sections, buttons, footer)
- ✅ **About page** (backgrounds, text, accents, animations)
- ✅ **Services page** (hero sections, cards, backgrounds)
- ✅ **Investors page** (accordions, stats, backgrounds)
- ✅ **Circulars page** (tables, buttons, highlights)
- ✅ **Compliance page** (hero gradients, badges, accents)
- ✅ **Contact page** (form sections, text, backgrounds)
- ✅ **Navigation bar** (toggle button, links)
- ✅ All buttons and interactive elements
- ✅ Text colors and backgrounds throughout the site
- ✅ Footers across all pages

## Technical Implementation

### CSS Custom Properties
Located in `src/index.css`:
- Uses CSS custom properties (CSS variables) for dynamic theming
- Automatically updates when `data-theme` attribute changes on `<html>` element
- Supports both light and dark elements seamlessly
- Variables include: `--color-primary`, `--color-accent`, `--color-highlight`, etc.

### Theme Context
Located in `src/context/ThemeContext.jsx`:
- React Context API for global state management
- Persists theme choice in localStorage
- Provides `useTheme()` hook for components
- Simple API: `const { theme, toggleTheme } = useTheme()`

### Tailwind Integration
Custom theme colors in `tailwind.config.js`:
- Pre-defined theme color utilities
- Usage: `bg-theme-primary`, `text-theme-highlight`, `bg-theme-bg-secondary`
- Works with all Tailwind modifiers (hover, focus, etc.)
- Example: `hover:bg-theme-accent`, `text-theme-text-primary/80`

## Color Mapping Guide

| Variable Name | Green-White Theme | Blue-Red-Yellow Theme |
|---------------|-------------------|----------------------|
| `theme-primary` | Dark Green | Navy Blue |
| `theme-accent` | Emerald | Red |
| `theme-highlight` | Lime | Yellow |
| `theme-bg-main` | Dark Green | Dark Blue |
| `theme-bg-secondary` | White | Light Yellow |
| `theme-text-primary` | White | Light Yellow |
| `theme-text-secondary` | Dark Green | Dark Blue |

## Development Notes

### Adding Theme Support to New Components:
1. Use theme color classes: `bg-theme-primary`, `text-theme-text-primary`
2. For complex colors, use CSS variables: `var(--color-highlight)`
3. **Avoid** hardcoded colors like `#071b14`, `bg-white`, `text-emerald-500`
4. Use opacity modifiers: `bg-theme-accent/10`, `text-theme-text-primary/70`

### Best Practices:
- ✅ Always use theme variables for colors
- ✅ Test both themes during development
- ✅ Use semantic color names (primary, accent, highlight)
- ❌ Don't use hardcoded hex colors
- ❌ Don't use Tailwind color names (green, blue, etc.) for brand colors

## Demo
🚀 Visit **http://localhost:5173/** and click the **Theme** button in the navbar to see the complete theme transformation across all pages!

## Files Modified
- `src/context/ThemeContext.jsx` - Theme state management
- `src/index.css` - CSS custom properties for both themes
- `src/App.jsx` - Theme provider wrapper
- `src/components/Navbar.jsx` - Theme toggle button
- `tailwind.config.js` - Custom theme color utilities
- `src/pages/Landing.jsx` - Full theme integration
- `src/pages/About.jsx` - Full theme integration
- `src/pages/Services.jsx` - Full theme integration
- `src/pages/Investors.jsx` - Full theme integration
- `src/pages/Circulars.jsx` - Full theme integration
- `src/pages/Compliance.jsx` - Full theme integration
- `src/pages/Contact.jsx` - Full theme integration
