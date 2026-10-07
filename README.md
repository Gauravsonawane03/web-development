]# Web Development Journey

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

### 7 October 2026 — React Mental Model Repair + Product Search

- Used targeted conceptual review to reinforce the React mental model around components, JSX, props, state, events, re-rendering, and one-way data flow
- Reinforced the difference between React state and normal JavaScript variables
- Understood that the state setter communicates a state update to React and leads to the component being re-rendered
- Reinforced that props carry data from parent to child and do not themselves cause the original state change
- Reviewed lifting state to a common parent when multiple components need to work with the same state
- Reconstructed the React data flow from user interaction → event handler → state setter → state update → re-render → updated props/UI
- Built a fresh Product Search feature rather than copying the previous Product Selector implementation
- Created a `SearchBar` child component
- Kept `searchText` state in the parent component
- Passed the current search value and callback function to `SearchBar` through props
- Implemented the controlled search input using `value` and `onChange`
- Used `event.target.value` to capture the user's current search text
- Sent the search value from the child to the parent through a callback prop
- Created a `ProductList` child component
- Passed the products array and current search text from the parent to `ProductList`
- Derived `filteredProducts` using `.filter()` rather than storing duplicated derived state
- Implemented case-insensitive product-name searching using `toLowerCase()` and `.includes()`
- Rendered matching products using `.map()`
- Used `product.id` as the React list `key`
- Added conditional rendering for `No products found`
- Tested initial state, partial searches, different products, case-insensitive searches, no-match behavior, clearing the search, and existing React UI
- Debugged stale references from the previous Product Selector implementation while integrating the new feature
- Successfully completed and tested the Product Search feature

The React mental model was reinforced successfully, and the Product Search feature was implemented end-to-end. The architecture and data flow were understood, but the implementation required substantial syntax and wiring guidance. `Props and state` therefore remains in progress and is not yet considered independently mastered or retained.

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