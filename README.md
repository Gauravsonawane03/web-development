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

### 3 October 2026 — React Product Selection + Lifting State

- Built a fresh Product Selector from a blank file without copying the previous ItemSelector implementation
- Designed the component relationship before implementation
- Kept `selectedProduct` state in the parent component
- Passed the `products` array from the parent to the child through props
- Passed the parent's `setSelectedProduct` function to the child through an `onSelect` callback prop
- Rendered multiple products in the child using `.map()`
- Used each product's `id` as the React list `key`
- Implemented product selection through an `onClick` handler
- Used `props.onSelect(product.name)` to send the selected product from the child to the parent
- Displayed the selected product in the parent component
- Verified selection of Laptop, Keyboard, and Monitor
- Tested repeated selections and changing from one product to another
- Added a selected-item styling variation using conditional `fontWeight`
- Passed the parent's `selectedProduct` back to the child through props
- Used `props.selectedProduct === product.name` to determine which product should appear bold
- Verified that only the currently selected product is bold
- Tested initial state, each product, repeated selection, changing selection, styling behavior, and refresh behavior
- Demonstrated the React data flow: click → child callback → parent state update → re-render → updated prop → conditional styling

The Product Selector successfully transferred the controlled component-communication and lifting-state pattern to a fresh problem. The implementation was completed with some syntax guidance, so `Props and state` remains in progress rather than being marked independently mastered. Further retrieval and fresh variations should reinforce the concept.

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