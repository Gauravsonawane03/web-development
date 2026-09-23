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

### 23 September 2026 — Async JavaScript / Fetch Retention and Independent Rebuild

Performed a retention-focused rebuild of Async JavaScript and Fetch from a new JavaScript file rather than relying on the previous implementation:

- Created a separate `async-fetch-retention.js` file for independent reconstruction
- Reconnected the new JavaScript file to the existing HTML page
- Rebuilt DOM element selection using `querySelector()`
- Rebuilt button event handling and `preventDefault()`
- Reconstructed the loading state
- Recalled and implemented an `async` function
- Reconstructed the `fetch()` → Promise → `Response` flow
- Reconstructed `response.json()` → Promise → parsed JavaScript data
- Recalled `response.ok` for HTTP success checking
- Reconstructed `throw new Error()` for HTTP failures
- Reconstructed `try...catch` for asynchronous error handling
- Connected the asynchronous operation to the DOM
- Rebuilt the success state displaying fetched user information
- Rebuilt the error state for failed HTTP requests
- Tested the HTTP `404` failure path
- Reconstructed the distinction between the `Response` object and parsed JavaScript data
- Reinforced that `fetch()` returns a Promise
- Reinforced that `response.json()` also returns a Promise
- Reinforced that `await` produces the fulfilled value or throws when the awaited Promise rejects
- Identified and corrected gaps in recall around `Response`, parsed JSON, and `response.ok`
- Completed a final retrieval check and correctly reconstructed the core Fetch sequence from memory

Retention checkpoint completed.

Async JavaScript / Fetch is now demonstrated beyond initial implementation, with further spaced retrieval still required before considering the capability fully mastered.

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