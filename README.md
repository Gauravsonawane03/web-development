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

### 21 September 2026 — Async JavaScript, Promises, Fetch, and DOM Integration

Learned and practiced asynchronous JavaScript and Fetch through hands-on implementation:

- Learned the difference between synchronous and asynchronous JavaScript
- Understood why waiting for network operations should not block normal JavaScript execution
- Learned Promises as objects representing the eventual result of asynchronous operations
- Practiced Promise states: pending, fulfilled, and rejected
- Created Promises using `new Promise()`
- Practiced resolving and rejecting Promises
- Consumed Promises using `.then()` and `.catch()`
- Learned how `async` functions and `await` work with Promises
- Understood that `async/await` is another way of consuming Promise-based operations
- Practiced `try...catch` for handling errors from asynchronous operations
- Learned the Fetch flow: `fetch()` → `Response` → `response.json()` → JavaScript data
- Performed a GET request using `fetch()`
- Inspected the `Response` object and distinguished it from the parsed response data
- Used `response.json()` to convert the response body into JavaScript data
- Extracted useful values from fetched objects, including nested properties
- Learned that HTTP errors such as `404` do not automatically cause `fetch()` to reject
- Used `response.ok` to check HTTP success
- Used `throw new Error()` to convert HTTP failures into handled errors
- Practiced handling network failures and HTTP failures with `try...catch`
- Integrated Fetch with the existing DOM and event-handling code
- Connected the Contact button to an asynchronous Fetch operation
- Implemented a loading state while waiting for the request
- Displayed successful fetched data in the webpage
- Displayed an error message when the request failed
- Tested both successful and `404` failure paths
- Debugged variable redeclaration caused by multiple JavaScript files sharing the same page
- Debugged scope issues and accidental recursive function calls during implementation

Completed the planned Async JavaScript / Fetch checkpoint for today.

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