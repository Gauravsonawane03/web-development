# Web Development Journey

This repository documents my journey of learning modern web development through structured practice, projects, and software-engineering fundamentals.

## Goal

Build strong frontend and backend development skills and eventually develop production-quality web applications.

## Technology Roadmap

### Frontend

- HTML
- CSS
- JavaScript
- TypeScript
- React

### Backend

- Node.js
- Express.js
- REST APIs
- PostgreSQL

### Supporting Skills

- Git & GitHub
- Debugging
- Testing
- Authentication
- Security
- Deployment
- Basic System Design

## Progress

### HTML

- [x] HTML fundamentals
- [x] Semantic HTML
- [x] Links and images
- [x] Lists
- [x] Forms
- [x] Basic page structure

### CSS

- [x] CSS fundamentals
- [x] Box model
- [x] Display
- [x] Flexbox
- [x] CSS Grid
- [x] Responsive design
- [x] CSS Positioning
- [ ] Advanced responsive layouts
- [ ] CSS architecture

### JavaScript

- [ ] Fundamentals
- [ ] DOM manipulation
- [ ] Events
- [ ] Async JavaScript
- [ ] APIs
- [ ] Modern JavaScript

### TypeScript

- [ ] Fundamentals
- [ ] Types
- [ ] Interfaces
- [ ] Generics
- [ ] Type-safe application development

### React

- [ ] Components
- [ ] Props and state
- [ ] Hooks
- [ ] Routing
- [ ] API integration
- [ ] Application architecture

### Backend

- [ ] Node.js
- [ ] Express.js
- [ ] REST APIs
- [ ] PostgreSQL
- [ ] Authentication
- [ ] Security
- [ ] Testing
- [ ] Deployment

## Learning Log

### 21 August 2026 — CSS Grid & Responsive Layout

Practiced and applied:

- `display: grid`
- `grid-template-columns`
- `fr` units
- `repeat()`
- `gap`
- Grid rows and implicit rows
- Grid auto-placement
- Grid lines and `grid-column`
- Responsive layouts using media queries

Applied CSS Grid to the existing learning page.

Responsive behavior:

- Desktop: three-column card layout
- Narrow viewport (`max-width: 600px`): single-column card layout

Tested different Grid configurations to understand:

- How `fr` distributes available space
- How Grid automatically places items into rows
- How individual items can span grid tracks
- How parent Grid rules interact with child placement rules
- How conflicting Grid rules can cause layout problems and overflow

Removed temporary experimental rules after understanding their behavior and kept the final implementation focused on the required responsive layout.

### 22 August 2026 — CSS Positioning

Practiced and applied:

- `position: relative`
- `position: absolute`
- `position: fixed`
- `position: sticky`
- `top`, `right`, `bottom`, and `left` offsets
- Positioning relative to the nearest positioned ancestor
- Difference between `absolute`, `fixed`, and `sticky` positioning
- How `sticky` behaves relative to scrolling and its threshold

Applied `position: sticky` to the existing section heading and verified its behavior while scrolling.

Tested positioning behavior using temporary experiments with cards and pseudo-elements to understand how positioned elements interact with their containing elements.

Removed temporary experimental code after understanding the behavior and kept the final implementation focused on the useful sticky positioning.

Verified that the positioning changes did not break the existing responsive Grid layout.

## Projects

Projects will be added progressively as my development skills improve.

The focus is on understanding how software works and building projects independently rather than following tutorials mechanically.

## Engineering Principles

- Understand before memorizing
- Write clean and maintainable code
- Use Git consistently
- Debug systematically
- Test important functionality
- Build incrementally
- Prefer fundamentals over unnecessary complexity