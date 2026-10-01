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

### 1 October 2026 — React Retrieval + Controlled Forms

- Retrieved the concepts of React state, `useState`, state setters, re-rendering, event handlers, direct mutation vs state setters, and fixed vs state vs derived data
- Reimplemented React state and event handling through a blank-page `Counter` component
- Used `useState` to manage changing component data
- Implemented `+` and `-` interactions with state updates
- Added a boundary condition preventing the counter from going below `0`
- Learned the concept of controlled React inputs
- Built a controlled input using `value` and `onChange`
- Explained the flow from user input → `onChange` → state update → React re-render → updated input value
- Built a controlled form with a text input and submit button
- Implemented form submission using `onSubmit`
- Used `event.preventDefault()` to prevent the browser's default form submission and page reload
- Implemented basic validation for empty input using `trim()`
- Added React state for validation errors
- Used conditional rendering to display validation feedback
- Added separate `name` and `submittedName` state to distinguish current input from previously submitted data
- Implemented successful form submission and displayed the submitted value
- Cleared validation errors after a valid submission
- Tested empty submission, valid submission, changing input after submission, and resubmitting updated data
- Reviewed the final `NameForm` implementation and explained the controlled-component pattern

React state, events, and controlled forms are now understood through retrieval, independent implementation, guided debugging, and functional testing. The concepts are not yet considered independently mastered because the controlled-form implementation still required guidance and should be reinforced through another fresh variation.

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