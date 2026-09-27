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

### 27 September 2026 — React State + Events Retrieval and Independent Practice

- Retrieved the concepts of React state, `useState`, state setters, and re-rendering
- Distinguished React state from ordinary JavaScript variables
- Learned why state should be updated through its setter instead of direct mutation
- Distinguished state, fixed data, and derived data
- Explained how state updates cause React to re-render the component
- Designed a new interactive component independently before implementation
- Built a `VolumeControl` component from a blank file
- Implemented `volume` as state with `useState`
- Used fixed `step` data to control volume changes
- Derived `status` from the current volume
- Implemented `+` and `-` event handlers
- Added volume boundaries from `0` to `100`
- Debugged the `+` interaction when it initially did not work
- Tested normal behavior and both boundary conditions
- Verified status transitions from `Muted` to `Low`, `Medium`, and `High`
- Explained the flow from user interaction → event handler → state update → React re-render → updated UI

React state and event handling are understood through retrieval and a second guided implementation. The concepts are not yet considered independently mastered because the implementation still required guidance and debugging support.

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