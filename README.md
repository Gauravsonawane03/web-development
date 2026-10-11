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
- [x] Tables
- [x] Forms
- [x] Accessibility basics
- [x] Useful HTML attributes
- [x] Basic page structure

### CSS
- [x] CSS fundamentals
- [x] Selectors
- [x] Cascade and specificity
- [x] Inheritance
- [x] Box model
- [x] Display
- [x] Flexbox
- [x] CSS Grid
- [x] Responsive design
- [x] CSS Positioning
- [x] Advanced responsive layouts
- [x] CSS architecture
- [x] Relative CSS units

### JavaScript
- [x] Fundamentals
- [x] DOM manipulation
- [x] Events
- [x] Forms
- [x] Input handling
- [x] Basic validation
- [x] DOM state + JavaScript logic
- [x] localStorage
- [x] Async JavaScript
- [ ] APIs
- [ ] Modern JavaScript

### TypeScript
- [ ] Fundamentals
- [ ] Types
- [ ] Interfaces
- [ ] Generics
- [ ] Type-safe application development

### React
- [x] Components
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

## Daily Learning Log

### 11 October 2026 — React Expense Tracker

- Created a new `ExpenseTracker.jsx` component to practise React through a fresh feature rather than repeating the previous task and search-list exercises.
- Used `useState` to manage the expenses array, description input, amount input, and selected category.
- Implemented controlled description and amount inputs using `value` and `onChange`.
- Added a category selector with options for all categories, Food, and Travel.
- Implemented form submission and basic validation to prevent adding expenses with empty descriptions or amounts.
- Created expense objects containing an ID, description, amount, and category.
- Added expenses to the existing array immutably using the state setter and spread syntax.
- Rendered expense entries using `.map()` and unique React keys.
- Calculated the total expense amount using `.reduce()`, converting input values to numbers with `Number()`.
- Tested adding multiple expenses and verified the total calculation.
- Tested category selection and confirmed the feature worked as expected.
- Debugged issues involving controlled input wiring, object property names, and form submission.

The Expense Tracker feature was completed and tested successfully. The exercise provided guided practice with React state, controlled inputs, form handling, validation, object-based data, immutable array updates, list rendering, and total calculation with `.reduce()`.

Implementation required substantial guidance, particularly for wiring state and understanding `.reduce()`. This counts as **guided practice completed**, not independent mastery. Future retrieval exercises should test whether these concepts can be implemented without step-by-step assistance.

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