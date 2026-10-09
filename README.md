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

### 9 October 2026 — React Retrieval + Shopping List Filtering

- Started a fresh Shopping List exercise to strengthen React implementation ability without copying the previous Product Search implementation.
- Worked with parent-owned state and child components receiving data and callback functions through props.
- Implemented a controlled input using `value` and `onChange`.
- Used `event.target.value` and a callback prop to communicate input changes to the parent.
- Passed the shopping items and search text from the parent to the child component.
- Derived `filteredList` from the existing items and search text using `.filter()`.
- Implemented case-insensitive filtering using `toLowerCase()` and `includes()`.
- Rendered filtered items using `.map()` and used item IDs as React list keys.
- Added conditional rendering for the empty-results message.
- Debugged component integration issues, including an undefined variable and incorrect prop wiring.
- Corrected the prop passed to the shopping list so it received the search state rather than a component reference.
- Tested the feature in the browser, including matching searches, no-match searches, and clearing the input.
- Confirmed that the existing React UI continued to render alongside the new feature.

The Shopping List filtering feature was completed and tested successfully. The exercise reinforced controlled inputs, props, callback-based communication, derived data, and conditional rendering. However, component wiring required debugging guidance, so independent implementation and retention remain unproven. Further blank-page retrieval is needed before considering these concepts independently mastered.

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