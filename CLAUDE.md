# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Служба крови" (Blood Service) - a static website built with Gulp-based build system. The project uses Pug for templating, SCSS for styling, and modern JavaScript with Babel transpilation. Built on the ninelines-team boilerplate architecture.

Demo: https://ovcharov2v.github.io/blood/

## Development Commands

### Development server with live reload
```bash
npm start
# or
gulp
```
Starts BrowserSync on port 3000 (configurable with --port) with automatic rebuilds on file changes.

### Production build
```bash
npm run build
# or
gulp build
```
Creates optimized production build in `build/` directory.

### Linting
```bash
gulp lint              # Run all linters
gulp lint:pug          # Pug template linter
gulp lint:scss         # SCSS linter (stylelint)
gulp lint:js           # JavaScript linter (ESLint)
gulp lint:js --fix     # Auto-fix ESLint issues
```

### Optimization
```bash
gulp optimize:images   # Optimize images in src/images/
gulp optimize:svg      # Optimize SVG files
```

### HTML Validation
```bash
gulp validate:html     # W3C HTML validation on build output
```

### Deploy to GitHub Pages
```bash
npm run deploy         # Builds and deploys to gh-pages branch
```

### Build Arguments
- `--minify` - Minify all assets (HTML, CSS, JS, SVG)
- `--minifyHtml`, `--minifyCss`, `--minifyJs`, `--minifySvg` - Minify specific asset types
- `--cache=false` - Disable caching
- `--debug` - Enable debug output
- `--spa` - Enable SPA mode with history API fallback
- `--ci` - CI mode (no cache, no notifications, throw errors)

## Architecture

### Directory Structure

```
src/
├── pug/                    # Pug templates
│   ├── base.pug           # Base layout
│   ├── common-blocks/     # Header, footer, mobile menu
│   ├── sections/          # Page sections
│   └── mixins/            # Reusable mixins (picture, svg)
├── scss/                   # SCSS styles
│   ├── main.scss          # Main entry point
│   ├── variables/         # Colors, fonts, breakpoints, transitions
│   ├── mixins/            # SCSS mixins (breakpoints, px2rem, etc)
│   ├── base/              # Base styles (typography, fonts, animations)
│   ├── layout/            # Layout components (container)
│   ├── components/        # UI components (button, form, input, checkbox, header, footer)
│   └── sections/          # Page-specific sections
├── js/                     # JavaScript
│   ├── main.js            # Application entry point
│   └── vendor.js          # Vendor dependencies
├── images/                 # Images and sprites
│   └── sprite/            # SVG sprite source
└── resources/             # Static assets (fonts, etc) - copied as-is to build/
```

### Build Pipeline

**Pug → HTML**: Pug templates compiled to HTML with emitty for incremental builds. Root-level `.pug` files in `src/` become HTML pages.

**SCSS → CSS**: SCSS compiled with node-sass, autoprefixed for browser compatibility, minified in production with cssnano. Source maps generated for development.

**JavaScript**: Webpack bundles with Babel transpilation (ES6+ → ES5), vendor code splitting (node_modules → vendor.js), source maps enabled.

**Images**: Copied to build/images with optional optimization (imagemin with mozjpeg for JPEG, optipng, gifsicle).

**Resources**: Static files from `src/resources/` copied directly to `build/` root (fonts, favicons, etc).

### Code Style

**JavaScript**: Enforced by ESLint with strict rules:
- Tabs for indentation (not spaces)
- Single quotes for strings
- Semicolons required
- 120 character line limit
- ES6+ syntax (no `var`, prefer arrow functions)
- No console statements (warn), no debugger

**SCSS**: Enforced by stylelint with extensive rules (see .stylelintrc)

**Pug**: Linted with pug-lint (see .pug-lintrc.json)

### Key Features

- **Emitty integration**: Only rebuilds changed Pug files and their dependencies for faster development
- **BrowserSync**: Live reload with configurable port and SPA mode support
- **Source maps**: Generated for CSS and JS in development mode
- **Vendor splitting**: Automatic code splitting separates node_modules into vendor.js
- **Image optimization**: Optional imagemin pipeline for production builds
